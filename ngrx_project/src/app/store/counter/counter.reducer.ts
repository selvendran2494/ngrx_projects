import { createFeature, createReducer, on } from '@ngrx/store'
import { counterActions } from './counter.action'


export type CounterState = {
  count: number
}
const initialCounterState: CounterState = {
  count: 0,
}
const counterFeauture = createFeature({
  name: 'counter',
  reducer: createReducer(
    initialCounterState,
    on(counterActions.increment, (state) => ({
      ...state,
      count: state.count + 1
    })),
    on(counterActions.decrement, (state) => ({
      ...state,
      count: state.count - 1
    })),
    on(counterActions.reset, (state) => ({
      ...state,
      count: 0
    }))
  )
});

export const {
  name: counterFeautureKey,
  reducer: counterReducer,
  selectCount,
} = counterFeauture



