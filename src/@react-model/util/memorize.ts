import { Memorize } from '../type'

export const memorize: Memorize = <T>(
  key: string,
  initial?: T,
  storageName = 'localStorage'
) => {
  const win = window as any
  const storage = win[storageName]
  const storageKey = `rm_${key}`
  let storageVal: undefined | T = undefined
  const setStorageVal = (data: T): string =>
    (win[storageName][`rm_${key}`] = JSON.stringify(data))
  if (initial !== undefined && !storage[storageKey])
    storage[storageKey] = JSON.stringify(initial)
  try {
    storageVal = JSON.parse(storage[storageKey])
  } catch (_) {
    storageVal = storage[storageKey]
  }
  return [storageVal as T, setStorageVal]
}
