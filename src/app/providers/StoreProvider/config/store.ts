import {
  configureStore as configureReduxStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { environments } from 'shared/config/env';
import { StateSchema } from '../types';
import { createReducerManager } from './reducerManager';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
};

export const createReduxStore = (initialState?: StateSchema) => {
  const reducerManager = createReducerManager(rootReducers);

  const store = configureReduxStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: environments.isDev,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
