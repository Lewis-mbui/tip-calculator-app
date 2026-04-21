import type { FormValues } from "../App";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

import FormField from "./FormField";
import TipPercentageField from "./TipPercentageField";

interface Props {
  onChange: (value: string, id: string) => void;
  values: FormValues;
}

const TipForm = ({ onChange, values }: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="tip-form" action="">
      <FormField
        id="bill"
        label="Bill"
        icon={dollarIcon}
        isDisabled={false}
        error={null}
        onChange={onChange}
        values={values}
      />
      <TipPercentageField isDisabled={false} />
      <FormField
        id="totalPeople"
        label="Number of People"
        icon={personIcon}
        isDisabled={false}
        error={null}
        onChange={onChange}
        values={values}
      />
    </form>
  );
};

export default TipForm;
