/* eslint-disable react/prop-types */
import '../Input/Input.css'
export default function Input({type , id, label}) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder=""
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
