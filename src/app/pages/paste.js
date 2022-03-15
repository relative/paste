import { decodeB64, decryptData } from '../crypto'
import * as monaco from 'monaco-editor'
import editor from '../editor/init'
import mime from 'mime-types'

async function onLoad() {
  const res = await fetch(`/paste/hydrate/${_HYDRATE.key}`)
  const json = await res.json()
  window._HYDRATE = json

  let data = _HYDRATE.data

  if (_HYDRATE.burned) {
    console.log(`%c🔥🔥🔥 paste ${_HYDRATE.key} was burned`, 'color:#FF9580')
  }

  if (_HYDRATE.encrypted) {
    if (location.hash) {
      try {
        const key = location.hash.slice(location.hash.indexOf('#') + 1)

        data = await decryptData({
          key,
          iv: _HYDRATE.iv,
          encrypted: data,
        })
      } catch (ex) {
        data =
          '//! ERROR: invalid decryption key!\n\n/*******************************************************\n\n' +
          ex.toString() +
          '\n\n*******************************************************/\n'
        _HYDRATE.language = 'javascript'
      }
    } else {
      data = '// ERROR: invalid decryption key!'
      _HYDRATE.language = 'javascript'
    }
  } else {
    const decoder = new TextDecoder('utf8')
    data = decoder.decode(decodeB64(data))
  }

  monaco.editor.setModelLanguage(
    editor.getModel(),
    _HYDRATE.language === 'text' ? 'plaintext' : _HYDRATE.language
  )
  editor.setValue(data)
  editor.updateOptions({ readOnly: true })
  delete _HYDRATE.data
}

if (editor) {
  onLoad()
} else {
  document.addEventListener('load', onLoad)
}

const $save = document.getElementsByName('save-to-disk')[0]

const languages = {
  javascript: 'js',
  typescript: 'js',
  markdown: 'md',
  text: 'txt',
}
$save.addEventListener('click', (e) => {
  const mapped = languages[_HYDRATE.language]
  const mimeType =
    mime.lookup(_HYDRATE.language) || mime.lookup(mapped) || 'text/plain'

  const blob = new Blob([editor.getValue()], {
    type: `${mimeType}; charset=utf-8`,
  })
  const ext = mime.extension(mimeType) || '.txt'
  const file = new File([blob], `${_HYDRATE.key}.${ext}`)
  $save.download = file.name
  $save.href = URL.createObjectURL(file)
})