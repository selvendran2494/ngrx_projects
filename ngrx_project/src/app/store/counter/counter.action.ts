import { createAction, createActionGroup, emptyProps } from '@ngrx/store'

export const counterActions = createActionGroup({
  source: 'counter',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps()
  }
})
