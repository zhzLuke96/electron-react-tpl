import { proxy, useSnapshot } from 'valtio';

export const createState = <T extends object>(initializeState: T) => {
  const state = proxy(initializeState);
  return {
    state,
    useState: () => useSnapshot(state),
  };
};
