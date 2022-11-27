import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../types';

interface StoreProviderProps extends React.PropsWithChildren {
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
