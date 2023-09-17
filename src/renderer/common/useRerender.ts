import React, { useReducer } from 'react';

export const useRerender = () => useReducer((x) => !x, true)[1];
