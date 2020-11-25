import { UseCreated } from 'util/@react-model/type'
import { useEffect } from 'react'

export const useCreated: UseCreated = (createFunc) => {
  useEffect(() => {
    ;(() => createFunc())()
  }, [])
}
