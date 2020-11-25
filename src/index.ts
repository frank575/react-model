import { useSubscribe } from 'util/@react-model/hook/useSubscribe'
import { useCreated } from 'util/@react-model/hook/useCreated'
import { useDestory } from 'util/@react-model/hook/useDestory'
import { useForceUpdate } from 'util/@react-model/hook/useForceUpdate'
import { useResetWithKey } from 'util/@react-model/hook/useResetWithKey'
import { publish } from 'util/@react-model/util/publish'
import { memorize } from 'util/@react-model/util/memorize'
import { resetMemory } from 'util/@react-model/util/resetMemory'

export const $$subscriber: {
  [subscriber: string]: Function[]
} = {}

export {
  useSubscribe,
  useCreated,
  useDestory,
  useForceUpdate,
  useResetWithKey,
  publish,
  memorize,
  resetMemory,
}
