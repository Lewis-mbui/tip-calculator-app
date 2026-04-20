import FormField from "./FormField";
import TipPercentageField from "./TipPercentageField";

const TipForm = () => {
  return (
    <form className="tip-form" action="">
      <FormField />
      <TipPercentageField />
      <FormField />
    </form>
  );
};

export default TipForm;
