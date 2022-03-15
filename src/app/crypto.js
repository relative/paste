export function createIV() {
  const iv = new Uint8Array(12)
  crypto.getRandomValues(iv)
  return iv
}

export async function createKey() {
  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  )
  return key
}
export async function getKeyString(key) {
  const jwk = await crypto.subtle.exportKey('jwk', key)
  return jwk.k
}
export async function importKey(keyStr) {
  const key = await crypto.subtle.importKey(
    'jwk',
    {
      alg: 'A256GCM',
      ext: true,
      k: keyStr,
      kty: 'oct',
    },
    'AES-GCM',
    true,
    ['decrypt']
  )
  return key
}

export function encodeB64(data) {
  return btoa(String.fromCharCode.apply(null, data))
}
export function decodeB64(data, size) {
  let decoded = [...atob(data)]
  if (typeof size !== 'number') {
    size = decoded.length
  }
  const arr = new Uint8Array(size)
  arr.set(
    decoded.map((i) => i.charCodeAt()),
    0
  )
  return arr
}

export async function encryptData(str) {
  const _key = await createKey(),
    _iv = createIV()

  const key = await getKeyString(_key),
    iv = await encodeB64(_iv)

  const encoder = new TextEncoder('utf8')

  const _encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: _iv,
      tagLength: 128,
    },
    _key,
    encoder.encode(str)
  )
  const encrypted = encodeB64(new Uint8Array(_encrypted))
  return { key, iv, encrypted }
}

export async function decryptData({ key, iv, encrypted }) {
  try {
    const _key = await importKey(key),
      _iv = decodeB64(iv, 12),
      _encrypted = decodeB64(encrypted)

    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: _iv,
        tagLength: 128,
      },
      _key,
      _encrypted
    )

    const decoder = new TextDecoder('utf8')
    return decoder.decode(decrypted)
  } catch (ex) {
    throw new Error('Decode key is invalid')
  }
}
