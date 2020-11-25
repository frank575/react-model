import { FunctionComponent, ReactElement } from 'react'

export interface Pop {
  pop: () => void
}
export interface UseSubscribe {
  (name: string, emitFunction: Function): Pop
}
export interface UseCreated {
  (createFunc: Function): void
}
export interface UseDestory {
  (destoryFunc: Function): void
}
export interface ForceUpdate {
  (): void
}
export interface UseForceUpdate {
  (): ForceUpdate
}
export interface UseResetWithKey {
  (): [string, () => void]
}
export interface Publish {
  <T>(name: string, action?: T): void
}
export interface Memorize {
  <T>(key: string, initial?: T, storageName?: string): [T, (data: T) => string]
}
export interface ResetMemory {
  (): void
}
