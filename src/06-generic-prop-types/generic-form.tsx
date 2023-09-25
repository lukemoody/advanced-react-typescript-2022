import { FC, ReactElement, useState } from "react";
import { LabeledInput } from "../components";

// type Props = {
//   header: string;
//   initialValues: any;
//   onSubmit: (values: any) => void;
// };

type Props<TData> = {
  header: string;
  initialValues: TData; // we dont know what these could be
  onSubmit: (values: TData) => void; // we dont know what these could be
};

// export const GenericForm: FC<Props> = ({ header, initialValues, onSubmit }) => {

// Error: Argument of type 'TData' is not assignable to parameter of type '{}'.
// Extend TData from object {}, but this doesnt work for value.
// export function GenericForm<TData extends {}>({
// Hovering over value it actually gives the correct type options
export function GenericForm<
  TData extends Record<string, string | number | readonly string[] | undefined>
>({ header, initialValues, onSubmit }: Props<TData>): ReactElement {
  const [values, setValues] = useState(initialValues);

  return (
    <form className="mb-5" onSubmit={() => onSubmit(values)}>
      <h3 className="mb-3">{header}</h3>

      {Object.keys(values).map((key) => (
        <LabeledInput
          key={key}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        >
          <span className="text-capitalize">{key}:</span>
        </LabeledInput>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
