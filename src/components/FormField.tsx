import type { FormErrors, FormValues } from "../App";

interface Props {
  id: string;
  label: string;
  icon: string;
  isDisabled: boolean;
  onChange: (value: string, id: string) => void;
  onBlur: (id: string) => void;
  values: FormValues;
  errors: FormErrors;
}

const FormField = ({
  label,
  icon,
  id,
  onChange,
  onBlur,
  values,
  errors,
}: Props) => {
  const inputVal = values[id as keyof FormValues] || "";
  const error = errors[id as keyof FormErrors];

  const errorClass = error ? "error" : "";
  let isDisabled = false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    // 1. Allow an empty string so users can backspace/delete
    if (value === "") {
      onChange("", id);
      return;
    }

    // 2. Use a Regex that allows numbers and at most one decimal point
    // This handles the "no non-numeric keys" requirement naturally
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (regex.test(value)) {
      onChange(value, id);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      {error && <p className="error">{error}</p>}

      <div className={`input-group ${errorClass}`}>
        <img src={icon} alt="" />

        <input
          value={inputVal}
          onChange={handleChange}
          onBlur={() => onBlur(id)}
          disabled={isDisabled}
          id={id}
          placeholder="0"
          type="text"
          name={id}
          className="primary-input"
          inputMode="decimal"
        />
      </div>
    </div>
  );
};

export default FormField;
