import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/types';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

type Params = {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
};

export const useDynamicModelLoader = (params: Params) => {
  const { reducers, removeAfterUnmount } = params;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([name, reducer]: [StateSchemaKey, Reducer]) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@MOUNT ${name} reducer` });
      }
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: [StateSchemaKey, Reducer]) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${reducer} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
