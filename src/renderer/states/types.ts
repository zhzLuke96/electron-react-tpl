import { ToastIntent } from '@fluentui/react-components';

export type ToasterAction = {
  text: string;
  action: ((dismiss: () => void) => void) | 'dismiss';
};

export type NotifyParams = {
  message: string;
  id?: string;
  title?: string;
  intent?: ToastIntent;
  title_actions?: ToasterAction[];
  footer_actions?: ToasterAction[];
};

export type NotifyFunction = (params: NotifyParams) => void;
