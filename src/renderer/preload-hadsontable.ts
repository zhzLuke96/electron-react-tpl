import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

console.log(
  `preload-handsontable.ts: Handsontable version: ${Handsontable.version}`
);
