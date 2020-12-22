import { UseForceUpdate } from '../type'
import { useState } from 'react'

export const useForceUpdate: UseForceUpdate = () => {
  const [, forceUpdate] = useState(false)
  return () => forceUpdate((r) => !r)
}
