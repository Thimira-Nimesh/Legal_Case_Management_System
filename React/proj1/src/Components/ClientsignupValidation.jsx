function Validation(initialValues) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const nic_pattern = /^[0-9]{9}[vVxX]$/;

  if (initialValues.Name === "") {
    error.Name = " Name should not be empty";
  } else {
    error.Name = "";
  }

  if (initialValues.Address === "") {
    error.Address = " Address should not be empty";
  } else {
    error.Address = "";
  }

  if (initialValues.Contact === "") {
    error.Contact = " Contact should not be empty";
  } else {
    error.Contact = "";
  }

  if (initialValues.NIC === "") {
    error.NIC = " NIC field should not be empty";
  } else if (!nic_pattern.test(initialValues.NIC)) {
    error.NIC = "NIC Didn't match";
  } else {
    error.NIC = "";
  }

  if (initialValues.Email === "") {
    error.Email = "Email should not be empty";
  } else if (!email_pattern.test(initialValues.Email)) {
    error.Email = "Email Didn't match";
  } else {
    error.Email = "";
  }

  if (initialValues.Password === "") {
    error.Password = "Password should not be empty";
  } else if (!password_pattern.test(initialValues.Password)) {
    error.Password = "Password didn't match";
  } else {
    error.Password = "";
  }
  return error;
}

export default Validation;
