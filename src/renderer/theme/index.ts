import {
  webLightTheme,
  webDarkTheme,
  teamsDarkTheme,
  teamsLightTheme,
  BrandVariants,
} from '@fluentui/react-components';
import { createv8Theme } from './v8ThemeShim';

const brandVariants = {
  '10': '#061724',
  '20': '#082338',
  '30': '#0a2e4a',
  '40': '#0c3b5e',
  '50': '#0e4775',
  '60': '#0f548c',
  '70': '#115ea3',
  '80': '#0f6cbd',
  '90': '#2886de',
  '100': '#479ef5',
  '110': '#62abf5',
  '120': '#77b7f7',
  '130': '#96c6fa',
  '140': '#b4d6fa',
  '150': '#cfe4fa',
  '160': '#ebf3fc',
} as BrandVariants;

export const themes = {
  v8: {
    light: createv8Theme(brandVariants, webLightTheme),
    dark: createv8Theme(brandVariants, webDarkTheme),
    teams_dark: createv8Theme(brandVariants, teamsDarkTheme),
    teams_light: createv8Theme(brandVariants, teamsLightTheme),
  },
  v9: {
    light: webLightTheme,
    dark: webDarkTheme,
    teams_dark: teamsDarkTheme,
    teams_light: teamsLightTheme,
  },
};
