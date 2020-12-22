import { useState } from 'react'
import { UseResetWithKey } from '../type'

export const useResetWithKey: UseResetWithKey = () => {
  const [i, setI] = useState(0)
  const reset = () => setI(i => i + 1)
  return [i + '', reset]
}
