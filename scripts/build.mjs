import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { sassPlugin } from 'esbuild-sass-plugin'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import esbuild from 'esbuild'

const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename)

const ROOT_PATH = join(__dirname, '..'),
  PUBLIC_PATH = join(ROOT_PATH, 'public'),
  SRC_PATH = join(ROOT_PATH, 'src', 'app'),
  MONACO_PATH = join(ROOT_PATH, 'node_modules', 'monaco-editor', 'esm', 'vs')

const args = process.argv.slice(2)

// should be 'production' | 'development'
const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'

// --vendor or -v
const vendor =
  args.length > 0 &&
  Boolean(args.find((a) => a && a.match(/^(?:--vendor|-v)$/gi)))

// --watch or -w
const watch =
  args.length > 0 &&
  Boolean(args.find((a) => a && a.match(/^(?:--watch|-w)$/gi)))

//const watch = args.length > 0 && args[0].match(/^(?:--watch|-w)$/gi) !== null
if (watch) console.log('watch mode')

const production = env === 'production' || !watch

/**
 * @type {import('esbuild').BuildOptions}
 */
const sharedOptions = {
  bundle: true,
  sourcemap: !production,
  minify: production,

  plugins: [NodeModulesPolyfillPlugin(), sassPlugin()],

  loader: {
    '.ttf': 'file',
    '.png': 'file',
  },

  logLevel: 'info',
  logLimit: process.env.CI ? 0 : 30,

  watch,
}

/**
 * @type {import('esbuild').BuildOptions}
 */
const buildOptions = vendor
  ? {
      entryPoints: [
        join(MONACO_PATH, 'editor', 'editor.worker.js'),
        join(MONACO_PATH, 'language', 'typescript', 'ts.worker.js'),
      ],
      outdir: join(PUBLIC_PATH, 'vendor'),
      outbase: MONACO_PATH,

      splitting: false,
      ...sharedOptions,
    }
  : {
      entryPoints: [join(SRC_PATH, 'index.js')],
      outdir: PUBLIC_PATH,
      outbase: SRC_PATH,

      format: 'esm',
      splitting: true,
      ...sharedOptions,
    }

let p = esbuild.build(buildOptions)

p.catch((_err) => {
  process.exit(1)
})
