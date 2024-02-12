import {createContext, PropsWithChildren, useContext} from 'react';
import {IRootStoreContext, RootStoreValue} from '@/core/stores/IRootStoreContext';

export const RootStoreContext = createContext<IRootStoreContext | null>(null);

// Возвращает все созданные хранилища из корня проекта.
export const useRootStore = () => {
  const data = useContext(RootStoreContext);

  if (data === null) {
    throw new Error('Root Store doesnt initialized');
  }

  return data;
}

// Компонент, проводящий все существующие хранилища в дочерние.
export const RootStoreProvider = ({children}: PropsWithChildren) => {
  return (
    <RootStoreContext.Provider value={RootStoreValue}>
      {children}
    </RootStoreContext.Provider>
  )
}