import { Publish } from '../type'
import { $$subscriber } from '../'

export const publish: Publish = <T>(name: string, action: T) => {
  $$subscriber[name] &&
    $$subscriber[name].forEach((func: Function) => {
      func(action)
    })
}
