import {
  Link,
  Toast,
  ToastBody,
  Toaster,
  ToastFooter,
  ToastIntent,
  ToastTitle,
  useId,
  useToastController,
} from '@fluentui/react-components';
import { useCallback } from 'react';
import { NotifyParams, ToasterAction } from 'renderer/states/types';

export const useToaster = () => {
  const toasterId = useId('toaster');
  const { dispatchToast, dismissAllToasts, dismissToast } =
    useToastController(toasterId);
  const actionRender = useCallback(
    (dismiss: () => void) =>
      ({ action, text }: ToasterAction) =>
        (
          <Link
            inline
            key={text}
            onClick={action === 'dismiss' ? dismiss : () => action(dismiss)}
          >
            {text}
          </Link>
        ),
    []
  );
  const notify = useCallback(
    ({
      message,
      title = 'Notify',
      intent = 'success',
      id = Math.random().toString(36).slice(2),
      title_actions = [
        {
          text: 'Dismiss',
          action: 'dismiss',
        },
      ],
      footer_actions,
    }: NotifyParams) => {
      dispatchToast(
        <Toast>
          <ToastTitle
            action={title_actions?.map(actionRender(() => dismissToast(id)))}
          >
            {title}
          </ToastTitle>
          <ToastBody subtitle="Subtitle">{message}</ToastBody>
          <ToastFooter>
            {footer_actions?.map(actionRender(() => dismissToast(id)))}
          </ToastFooter>
        </Toast>,
        {
          toastId: id,
          intent,
          timeout: 5000,
          pauseOnHover: true,
          // pauseOnWindowBlur: true,
        }
      );
    },
    [actionRender, dismissToast, dispatchToast]
  );

  const toasterRender = () => <Toaster toasterId={toasterId} />;

  return {
    toasterId,
    notify,
    toasterRender,
    dismissAllToasts,
    dismissToast,
  };
};
