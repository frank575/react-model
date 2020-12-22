import { useSubscribe } from './hook/useSubscribe'
import { useCreated } from './hook/useCreated'
import { useDestroy } from './hook/useDestroy'
import { useResetWithKey } from './hook/useResetWithKey'
import { publish } from './util/publish'
import { memorize } from './util/memorize'
import { resetMemory } from './util/resetMemory'

export const $$subscriber: {
  [subscriber: string]: Function[]
} = {}

export {
  useSubscribe,
  useCreated,
  useDestroy,
  useResetWithKey,
  publish,
  memorize,
  resetMemory,
}
