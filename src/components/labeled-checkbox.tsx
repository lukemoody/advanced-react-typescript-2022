import {
  ChangeEventHandler,
  FC,
  ReactNode,
  useId,
  ComponentProps,
} from "react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

// Devering component prop types
// CheckboxProps is exposed to whatever is provided from Checkbox
// This is what Prismic does with the types that are automatically generated
// type CheckboxProps = ComponentProps<typeof Checkbox>;

// type Props = {
//   disabled: boolean;
//   checked: boolean;
//   children: ReactNode;
//   onChange?: ChangeEventHandler;
// };

// This basically says give me all the origional values for Props, plus all of those defined
// in Checkbox
// type Props = {
//   disabled: boolean;
//   checked: boolean;
//   children: ReactNode;
//   onChange?: ChangeEventHandler;
// } & CheckboxProps;

// type Props = CheckboxProps; // simplified version. also removed props from below
type Props = ComponentProps<typeof Checkbox>;

export const LabeledCheckbox: FC<Props> = ({
  id,
  //   checked,
  children,
  //   disabled,
  //   onChange,
  ...props // added
}) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox
        // checked={checked}
        id={id ?? internalId}
        // onChange={onChange}
        {...props} // added
        // disabled={disabled}
      />
      <Label htmlFor={id ?? internalId}>{children}</Label>
    </div>
  );
};
