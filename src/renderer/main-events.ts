// // 渲染进程

import fs from 'fs/promises';
import { ipcRenderer } from 'electron';

ipcRenderer.on('open-file', async (...args) => {
  console.log('open-file', args);
  const text = await fs.readFile(args[1] as string, 'utf-8');
  console.log(text);
});
