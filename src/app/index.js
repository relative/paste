import './styles/index.scss'

if (document.getElementById('editor')) {
  import('./editor/init')
}
const href = location.href
if (href.match(/\/paste\/new(?:#?.+)?$/i)) {
  // /paste/new
  import('./pages/newPaste')
} else if (href.match(/\/paste\/\w+(?:#?.+)?$/i)) {
  // /paste/:key#aeskey
  import('./pages/paste')
}
