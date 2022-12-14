const Input = ({ value, handleOnChange }) => {
  return (
    <input className="input" name="desc" value={value.desc} onChange={(e) => handleOnChange(e)} />
  );
};

export default Input;
