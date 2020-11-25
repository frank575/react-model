import { useState } from 'react'
import { UseResetWithKey } from 'util/@react-model/type'

export const useResetWithKey: UseResetWithKey = () => {
  const [isRe, setRe] = useState(true)
  const reset = () => setRe(!isRe)
  const key = isRe ? '1' : '0'
  return [key, reset]
}
