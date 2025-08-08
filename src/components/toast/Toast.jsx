import clsx from "clsx";

import {
  ToastWrapper,
  ToastTitle,
  ToastContainer,
  ToastDescription,
  ToastCloseBtn,
  ToastInboxIcon,
} from "./index.js";

import {
  toastWrapper,
  toastTitle,
  toastDescription,
  toastMainIcon,
  toastTail,
  toastIconColor,
  toastCloseIcon,
} from "./toastVariants.js";

// variant: bold / light
// color: default / blue / purple / green
// size: sm / md / lg
// tail: none / left / right / center

export const Toast = ({ text, title, variant, color, size, tail }) => {
  return (
    <ToastWrapper
      tailClassName={toastTail({ variant, size, tail })}
      className={toastWrapper({ variant, color, size })}
    >
      <ToastContainer>
        <ToastInboxIcon
          className={clsx(
            toastMainIcon({ size }),
            toastIconColor({ variant, color })
          )}
        ></ToastInboxIcon>
        <div className="flex flex-col">
          <ToastTitle
            title={title}
            className={toastTitle({ variant, color, size })}
          ></ToastTitle>
          <ToastDescription
            text={text}
            className={toastDescription({
              variant,
              color,
              size,
            })}
          ></ToastDescription>
        </div>
        <ToastCloseBtn
          className={clsx(
            toastCloseIcon({ size }),
            toastIconColor({ variant, color })
          )}
        />
      </ToastContainer>
    </ToastWrapper>
  );
};
