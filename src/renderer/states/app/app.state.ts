import { createState } from '../createState';
import { NotifyFunction } from '../types';

export const app_state = createState({
  theme: 'dark' as 'dark' | 'light' | 'teams_dark' | 'teams_light',

  notify: ((x: any) => x) as any as NotifyFunction,
});
