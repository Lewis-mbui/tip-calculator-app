import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

import FormField from "./FormField";
import TipPercentageField from "./TipPercentageField";

const TipForm = () => {
  return (
    <form className="tip-form" action="">
      <FormField
        id="bill"
        label="Bill"
        icon={dollarIcon}
        isDisabled={false}
        error={null}
      />
      <TipPercentageField isDisabled={false} />
      <FormField
        id="totalPeople"
        label="Number of People"
        icon={personIcon}
        isDisabled={false}
        error={null}
      />
    </form>
  );
};

export default TipForm;
