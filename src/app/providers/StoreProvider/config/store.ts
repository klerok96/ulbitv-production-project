import {
  configureStore as configureReduxStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { environments } from 'shared/config/env';
import { StateSchema } from '../types';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
};

export const createReduxStore = (initialState?: StateSchema) =>
  configureReduxStore<StateSchema>({
    reducer: rootReducers,
    devTools: environments.isDev,
    preloadedState: initialState,
  });
