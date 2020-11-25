import { UseForceUpdate } from 'util/@react-model/type'
import { useState } from 'react'

export const useForceUpdate: UseForceUpdate = () => {
  const [, forceUpdate] = useState(false)
  return () => forceUpdate((r) => !r)
}
