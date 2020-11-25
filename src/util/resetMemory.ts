import { ResetMemory } from 'util/@react-model/type'

export const resetMemory: ResetMemory = () => {
  const storages = [localStorage, sessionStorage]
  storages.forEach((storage) => {
    for (const key in storage) {
      if (/rm_.*/.test(key)) {
        localStorage.removeItem(key)
      }
    }
  })
}
