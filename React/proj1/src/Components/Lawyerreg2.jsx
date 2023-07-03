import { React } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import axios from "axios";

function Lawyerreg2() {
  const initialValues = {
    Name: "",
    Address: "",
    Contact: "",
    NIC: "",
    Email: "",
    Password: "",
  };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("You must input the Name"),
  //   address: Yup.string().required("You must input the Address"),
  //   contact: Yup.string().required("You must input the Contact Details"),
  //   nic: Yup.string().required("You must input the NIC"),
  //   email: Yup.string().required("You must input the Email"),
  //   password: Yup.string()
  //     .min(3)
  //     .max(15)
  //     .required("You must input the Password"),
  // });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/lawyers", data).then((response) => {
      //setlistofclients(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="createlawyerpage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Name:</label>
          <br></br>
          <ErrorMessage name="Name" component="span" />
          <Field id="inputcreateclient" name="Name" placeholder="User Name" />

          <label>Address:</label>
          <br></br>
          <ErrorMessage name="Address" component="span" />
          <Field id="inputcreateclient" name="Address" placeholder="Address" />

          <label>Contact:</label>
          <br></br>
          <ErrorMessage name="Contact" component="span" />
          <Field id="inputcreateclient" name="Contact" placeholder="Contact" />

          <label>NIC:</label>
          <br></br>
          <ErrorMessage name="NIC" component="span" />
          <Field id="inputcreateclient" name="NIC" placeholder="NIC" />

          <label>Email:</label>
          <br></br>
          <ErrorMessage name="Email" component="span" />
          <Field id="inputcreateclient" name="Email" placeholder="Email" />

          <label>Password:</label>
          <br></br>
          <ErrorMessage name="Password" component="span" />
          <Field
            id="inputcreateclient"
            name="Password"
            placeholder="Password"
          />
          <br></br>

          <button type="submit">Create Client</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Lawyerreg2;
