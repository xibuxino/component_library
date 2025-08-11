import clsx from "clsx";

import { TooltipWrapper, TooltipCloseBtn, TooltipInboxIcon } from "./index.js";

import {
  tooltipWrapper,
  tooltipTitle,
  tooltipDescription,
  tooltipMainIcon,
  tooltipTail,
  tooltipIconColor,
  tooltipCloseIcon,
} from "./tooltipVariants.jsx";

// variant: bold / light
// color: default / blue / purple / green
// size: sm / md / lg
// tail: none / left / right / center

export const Tooltip = ({ text, title, variant, color, size, tail }) => {
  return (
    <TooltipWrapper
      tailClassName={tooltipTail({ variant, size, tail })}
      className={tooltipWrapper({ variant, color, size })}
    >
      <div className="flex flex-row gap-x-3">
        <TooltipInboxIcon
          className={clsx(
            tooltipMainIcon({ size }),
            tooltipIconColor({ variant, color })
          )}
        ></TooltipInboxIcon>
        <div className="flex flex-col">
          <h3 className={tooltipTitle({ variant, color, size })}>{title}</h3>
          <p
            className={tooltipDescription({
              variant,
              color,
              size,
            })}
          >
            {text}
          </p>
        </div>
        <TooltipCloseBtn
          className={clsx(
            tooltipCloseIcon({ size }),
            tooltipIconColor({ variant, color })
          )}
        />
      </div>
    </TooltipWrapper>
  );
};
