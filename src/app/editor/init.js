import * as monaco from 'monaco-editor'
import './theme'
const $editor = document.getElementById('editor')

;((paths) => {
  self.MonacoEnvironment = {
    getWorkerUrl: function (_, label) {
      if (!paths[label]) label = 'default'
      let path = paths[label]
      if (path.startsWith('/')) return path

      // resolve language aliases
      path = paths[path]
      if (!path) path = paths['default']

      return path
    },
  }
})({
  typescript: '/public/vendor/language/typescript/ts.worker.js',
  javascript: 'typescript',
  default: '/public/vendor/editor/editor.worker.js',
})

export default monaco.editor.create($editor, {
  value: '',
  language: 'javascript',
  theme: 'dark',
  fontFamily:
    'ui-monospace, Menlo, Monaco, "Cascadia Code", "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  automaticLayout: true,

  tabSize: 4,
  insertSpaces: true,
})
