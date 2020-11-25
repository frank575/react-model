import { UseSubscribe } from 'util/@react-model/type'
import { useEffect } from 'react'
import { $$subscriber } from '@react-model'

export const useSubscribe: UseSubscribe = (name, emitFunc) => {
  const pop = (): void => {
    const subscriber: Function[] = $$subscriber[name]
    const removeSubscriberIndex: number = subscriber.findIndex(
      (f: Function) => f === emitFunc
    )
    if (removeSubscriberIndex !== -1) {
      subscriber.splice(removeSubscriberIndex, 1)
    }
  }

  useEffect(() => {
    if ($$subscriber[name] === undefined) {
      $$subscriber[name] = [emitFunc]
    } else {
      $$subscriber[name].push(emitFunc)
    }
    return pop
  }, [])

  return {
    pop,
  }
}
