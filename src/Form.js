import { useState } from "react";
import SuccesMessage from "./SuccesMessage.js";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    supportRequest: "",
    generalEnquiry: "",
    checkbox: false,
    sumbitSuccess: false,
  });
  const [successState, setSuccessState] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const [error, setError] = useState({});

  // Function to validate email address
  function validateEmail(email) {
    // Regular expression for email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Return true if email matches regex, false otherwise
    return regex.test(email);
  }

  function validate() {
    // New Obj to handle error and error messages
    let newError = {};

    // Handling error message
    if (!values.firstName) newError.firstName = "This field is required";
    if (!values.lastName) newError.lastName = "This field is required";
    if (!values.email) {
      newError.email = "This field is required";
    } else {
      if (!validateEmail(values.email))
        newError.email = "Please enter a valid email address";
    }
    if (!values.message) newError.message = "This field is required";

    if (!values.supportRequest && !values.generalEnquiry)
      newError.queryMessage = "Please select a query type";

    if (values.checkbox === false)
      newError.checkbox =
        "To submit this form, please consent to being contacted";

    // Set error state with newError Obj
    setError(newError);

    // The function returns true if newError obj is empty else return false
    return Object.keys(newError).length === 0;
  }

  // When submit button is clicked, the function is calld
  function submitForm(e) {
    e.preventDefault();
    // Check if validation function is true. If is true, spread data in a new state obj, set Success State True to show the success message and than clean all the fields.
    if (validate()) {
      setSuccessState(true);
      setSubmittedData({ ...values });
      console.log(submittedData);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        supportRequest: "",
        generalEnquiry: "",
        checkbox: false,
        sumbitSuccess: false,
      });
    }
  }

  // Updating values state property
  function handleChange(e, setFunction, value) {
    setFunction({ ...values, [value]: e.target.value });
  }

  // Removing error state when start typing
  function handleChangeError(setFunction, state, propertyName, value) {
    setFunction({ ...state, [propertyName]: value });
  }

  if (successState)
    return (
      <SuccesMessage
        submittedData={submittedData}
        onSuccessState={setSuccessState}
      />
    );

  return (
    <form className="form App" onSubmit={submitForm}>
      <h1>Contact us</h1>

      {/* FIRST NAME */}
      <label htmlFor="first-name">
        First Name * <br></br>
        <input
          autoComplete="on"
          className={error.firstName ? "error-state" : ""}
          id="first-name"
          type="text"
          value={values.firstName}
          onChange={(e) => {
            handleChange(e, setValues, "firstName");
            handleChangeError(setError, error, "firstName", "");
          }}
        />
        {error.firstName && <p className="error-state">{error.firstName}</p>}
      </label>

      {/* LAST NAME */}
      <label htmlFor="last-name">
        Last name * <br></br>
        <input
          id="last-name"
          className={error.lastName ? "error-state" : ""}
          type="text "
          name="last-name"
          value={values.lastName}
          onChange={(e) => {
            handleChange(e, setValues, "lastName");
            handleChangeError(setError, error, "lastName", "");
          }}
        />
        {error.lastName && <p className="error-state">{error.lastName}</p>}
      </label>

      {/* EMAIL ADDRESS */}
      <label htmlFor="email">
        Email Address * <br></br>{" "}
        <input
          autoComplete="on"
          className={error.email ? "error-state" : ""}
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => {
            handleChange(e, setValues, "email");
            handleChangeError(setError, error, "email", "");
          }}
        />
        {error.email && <p className="error-state">{error.email}</p>}
      </label>

      {/* ENQUIRY */}
      <label htmlFor="query">
        Query Type * <br></br>
        <fieldset
          name="general-enquiry"
          className={values.generalEnquiry ? "isActive" : ""}
        >
          <input
            checked={values.generalEnquiry}
            id="query"
            type="radio"
            name="support"
            value="General Enquiry"
            onChange={(e) => {
              setValues({
                ...values,
                generalEnquiry: e.target.value,
                supportRequest: "",
              });
              handleChangeError(setError, error, "queryMessage", "");
            }}
          />
          General Enquiry
        </fieldset>
        <fieldset
          name="support-request"
          className={values.supportRequest ? "isActive" : ""}
        >
          <input
            checked={values.supportRequest}
            type="radio"
            name="support"
            value="Support Request"
            onChange={(e) => {
              setValues({
                ...values,
                supportRequest: e.target.value,
                generalEnquiry: "",
              });
              handleChangeError(setError, error, "queryMessage", "");
            }}
          />
          Support Request
        </fieldset>
      </label>
      {error.queryMessage && (
        <p className="error-state"> Please select a query type</p>
      )}

      {/* MESSAGE */}
      <label htmlFor="message">
        Message * <br></br>{" "}
        <textarea
          id="message"
          className={error.message ? "error-state" : ""}
          type="text"
          value={values.message}
          onChange={(e) => {
            handleChange(e, setValues, "message");
            handleChangeError(setError, error, "message", undefined);
          }}
        />
        {error.message && <p className="error-state">{error.message}</p>}
      </label>

      {/* CHECKBOX CONSENT */}
      <fieldset name="consent">
        <input
          id="checkbox"
          checked={values.checkbox}
          type="checkbox"
          value={values.checkbox}
          onChange={() => {
            setValues({ ...values, checkbox: !values.checkbox });
            handleChangeError(setError, error, "checkbox", "");
          }}
        />
        <label htmlFor="checkbox">
          I consent to being contacted by the team*
        </label>
      </fieldset>
      <p className="error-state">{values.checkbox || error.checkbox}</p>

      {/* SUBMIT FORM BUTTON */}
      <button onClick={submitForm} name="submit">
        Submit
      </button>
    </form>
  );
}
