import type { FormErrors, FormValues } from "../App";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

import FormField from "./FormField";
import TipPercentageField from "./TipPercentageField";

interface Props {
  onChange: (value: string, id: string) => void;
  onBlur: (id: string) => void;
  values: FormValues;
  errors: FormErrors;
}

const TipForm = ({ onChange, onBlur, values, errors }: Props) => {
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className="tip-form"
      action=""
    >
      <FormField
        id="bill"
        label="Bill"
        icon={dollarIcon}
        isDisabled={false}
        onChange={onChange}
        onBlur={onBlur}
        values={values}
        errors={errors}
      />
      <TipPercentageField values={values} errors={errors} />
      <FormField
        id="totalPeople"
        label="Number of People"
        icon={personIcon}
        isDisabled={false}
        onChange={onChange}
        onBlur={onBlur}
        values={values}
        errors={errors}
      />
    </form>
  );
};

export default TipForm;
