import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => {
  console.log(inputOptions);
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      {label && (
        <label
          htmlFor={inputOptions.id}
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
