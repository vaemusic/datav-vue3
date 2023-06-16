import { URL, fileURLToPath } from 'node:url'

export function getCurrnetDir() {
  const url = new URL('.', import.meta.url)
  return fileURLToPath(url)
}
