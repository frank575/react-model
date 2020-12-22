import { UseSubscribe } from '../type'
import { useEffect } from 'react'
import { $$subscriber } from '../'
import {useForceUpdate} from "src/@react-model/hook/useForceUpdate";

export const useSubscribe: UseSubscribe = (name, emitFunc) => {
  const render = useForceUpdate()
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
    let fn: Function
    if (emitFunc === undefined) fn = render;
    else fn = <T>(action: T) => emitFunc({action, render, pop})
    if ($$subscriber[name] === undefined) {
      $$subscriber[name] = [fn]
    } else {
      $$subscriber[name].push(fn)
    }
    return pop
  }, [])

  return {
    pop,
  }
}
