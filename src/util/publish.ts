import { Publish } from 'util/@react-model/type'
import { $$subscriber } from '@react-model'

export const publish: Publish = <T>(name: string, action: T) => {
  $$subscriber[name] &&
    $$subscriber[name].forEach((func: Function) => {
      func(action)
    })
}
