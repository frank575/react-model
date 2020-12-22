export interface Pop {
  pop: pop
}
export interface pop {
  (): void
}
export interface UseSubscribe {
  (name: string, emitFunction?: (data: { action: any, render: ForceUpdate, pop: pop }) => void): Pop
}
export interface UseCreated {
  (createFunc: Function): void
}
export interface UseDestroy {
  (destroyFunc: Function): void
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
