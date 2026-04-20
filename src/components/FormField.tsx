interface Props {
  id: string;
  label: string;
  icon: string;
  error: string | undefined | null;
  isDisabled: boolean;
}

const FormField = ({ label, icon, id, isDisabled, error }: Props) => {
  const errorClass = error ? "error" : "";

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {error && <p className="error">{error}</p>}
      <div className={`input-group ${errorClass}`}>
        <img src={icon} alt="" />
        <input
          disabled={isDisabled}
          id={id}
          placeholder="0"
          type="number"
          name={id}
          className="primary-input"
        />
      </div>
    </div>
  );
};

export default FormField;
