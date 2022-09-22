import { Fragment } from "react";

const FormInput = (props) => {
  const { handleChange, formFields } = props;
  const { displayName, email, password, confirmPassword } = formFields;
  return (
    <Fragment>
      <label>Display Name</label>
      <input
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
      />

      <label>Email</label>
      <input
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />

      <label>Confirm Password</label>
      <input
        type="password"
        required
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
      />
      <button type="submit">Sign Up</button>
    </Fragment>
  );
};

export default FormInput;
