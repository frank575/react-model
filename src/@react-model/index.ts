import { useSubscribe } from './hook/useSubscribe'
import { useCreated } from './hook/useCreated'
import { useDestroy } from './hook/useDestroy'
import { useReset } from './hook/useReset'
import { publish } from './util/publish'
import { memorize } from './util/memorize'

export const $$rm_store: {
  subscribers: {
    [type: string]: Function[]
  }
} = {
  subscribers: {}
}

export {
  useSubscribe,
  useCreated,
  useDestroy,
  useReset,
  publish,
  memorize,
}
