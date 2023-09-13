import type { FC } from "react";
import { useIntl } from "react-intl";

type Variant =
  | "danger"
  | "dark"
  | "info"
  | "light"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

// type Props = {
//   message?: string;
//   messageId?: string;
//   variant?: Variant;
// };

// The following type means this OR that
// type Props =
//   | (
//       | {
//           message: string;
//           messageId?: never; // TypeScript introduced a new type never, which indicates the values that will never occur.
//         }
//       | {
//           message?: never; // TS data type - never
//           messageId: string;
//         }
//     ) & {
//       variant?: Variant;
//     };

type Props2 = (
  | {
      message: string;
      messageId?: never; // TS data type - never
    }
  | {
      message?: never; // TS data type - never
      messageId: string;
    }
) & {
  variant?: Variant;
};

export const DualAlert: FC<Props2> = ({
  message,
  messageId,
  variant = "primary",
}) => {
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {actualMessage}
    </div>
  );
};
