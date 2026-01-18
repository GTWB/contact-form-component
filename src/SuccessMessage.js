import iconSuccessCheck from "./images/icon-success-check.svg";

export default function SuccessMessage({ submittedData, onSuccessState }) {
  function returnToForm() {
    onSuccessState(false);
  }

  return (
    <div className="success-container">
      <div className="title-message">
        <img src={iconSuccessCheck} alt="Success Check" />
        <h1>Message sent.</h1>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>

      <h3>Your enquiry details:</h3>
      <div className="content-details">
        <p>
          <b>Name:</b>
        </p>
        <p>{submittedData.firstName}</p>
        <p>
          <b>Last Name:</b>
        </p>
        <p>{submittedData.lastName}</p>
        <p>
          <b>email:</b>
        </p>
        <p>{submittedData.email}</p>
        <p>
          <b>Query Type:</b>
        </p>
        <p>{submittedData.generalEnquiry || submittedData.supportRequest}</p>
        <p>
          <b>Your Message:</b>
        </p>
        <p>{submittedData.message}</p>
        <p>
          <b>Consent:</b>
        </p>
        <p>{submittedData.checkbox ? "True" : "False"}</p>
      </div>
      <button onClick={returnToForm}>Return</button>
    </div>
  );
}
