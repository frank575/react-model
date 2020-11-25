import { UseDestory } from 'util/@react-model/type'
import { useEffect } from 'react'

export const useDestory: UseDestory = (destoryFunc) => {
  useEffect(() => () => destoryFunc(), [])
}
