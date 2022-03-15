import { encodeB64, encryptData } from '../crypto'
import * as monaco from 'monaco-editor'
import editor from '../editor/init'

const $form = document.querySelector('form.options')
const $languageSelect = document.getElementsByName('language')[0]

async function createPaste() {
  const formData = new URLSearchParams(new FormData($form))

  const encrypt = $form.encrypt.checked,
    plaintext = editor.getValue()

  let decodeKey = ''

  if (encrypt) {
    const { key, iv, encrypted } = await encryptData(plaintext)
    decodeKey = '#' + key
    formData.append('data', encrypted)
    formData.append('iv', iv)
  } else {
    const encoder = new TextEncoder('utf8')
    formData.append('data', encodeB64(encoder.encode(plaintext)))
  }

  const res = await fetch(location.href, {
    method: 'POST',
    body: formData.toString(),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  })
  const json = await res.json()
  if (!json || !json.key) {
    return alert(
      'Error creating paste\n' + json.message || 'no error from server'
    )
  }

  const ephemeral = $form.ephemeral.checked

  let pasteUri = `${window.origin}/paste/${json.key}${decodeKey}`,
    ephemeralWarnings = ['warning: visiting this URI will burn your paste']

  if ('clipboard' in navigator) {
    try {
      navigator.clipboard.writeText(pasteUri)
    } catch (ex) {
      if (ephemeral) {
        ephemeralWarnings.push('ERROR: failed to write to clipboard')
        ephemeralWarnings.push(ex.message)
      }
      console.warn('Failed to write to clipboard', ex.toString())
    }
  }
  if (ephemeral) {
    editor.setValue(
      `// ephemeral paste created\n//\n${ephemeralWarnings
        .map((e) => '// ' + e)
        .join('\n')}\n//\n// paste URI =\n// ${pasteUri}\n`
    )
  } else {
    location.href = pasteUri
  }
}

$languageSelect.addEventListener('change', (e) => {
  monaco.editor.setModelLanguage(
    editor.getModel(),
    $languageSelect.value === 'text' ? 'plaintext' : $languageSelect.value
  )
})

$form.addEventListener('submit', async (e) => {
  e.preventDefault()
  await createPaste()
})

document.addEventListener('keydown', async (e) => {
  if (e.ctrlKey) {
    if (e.key === 's') {
      e.preventDefault()
      await createPaste()
    }
  }
})
