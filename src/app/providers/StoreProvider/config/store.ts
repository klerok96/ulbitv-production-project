import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import { environments } from 'shared/config/env';
import { StateSchema } from '../types';

export const createReduxStore = (initialState?: StateSchema) =>
  configureReduxStore<StateSchema>({
    reducer: {},
    devTools: environments.isDev,
    preloadedState: initialState,
  });
