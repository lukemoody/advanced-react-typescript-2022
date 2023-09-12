import { ReactElement, FC } from "react";
import { useIntl } from "react-intl";

type Props = {
  messageId: string;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "info"
    | "light"
    | "dark";
};

// interface Props {
//   messageId: string;
//   variant:
//     | "primary"
//     | "secondary"
//     | "success"
//     | "danger"
//     | "info"
//     | "light"
//     | "dark";
// }

// Additing ReactElement will make sure errors are thrown if the return is missing
// for example
export const Alert: FC<Props> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error("The messageId prop is required");
  }

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
};
