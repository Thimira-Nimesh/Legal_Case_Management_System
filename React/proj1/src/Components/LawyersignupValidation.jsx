function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const nic_pattern = /^[0-9]{9}[vVxX]$/;

  if (values.fname === "") {
    error.fname = " First Name should not be empty";
  } else {
    error.fname = "";
  }
  if (values.lname === "") {
    error.lname = " Last Name should not be empty";
  } else {
    error.lname = "";
  }
  if (values.address === "") {
    error.address = " Address should not be empty";
  } else {
    error.address = "";
  }

  if (values.nic === "") {
    error.nic = " NIC field should not be empty";
  } else if (!nic_pattern.test(values.nic)) {
    error.nic = "NIC Didn't match";
  } else {
    error.nic = "";
  }

  if (values.lawyernum === "") {
    error.lawyernum = " Lawyer Number should not be empty";
  } else {
    error.lawyernum = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
