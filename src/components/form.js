import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAlert,
} from "mdbreact";
import axios from "axios";
import moment from "moment";
import LotteryLunch from "../images/lotterylunch.png";

const FormPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [lnameValidation, setLnameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [cemailValidation, setCemailValidation] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
    // const res = checkValidation()
    console.log(
      "name ",
      name,
      "email ",
      email,
      "c email ",
      confirmEmail,
      "date",
      moment().format("YYYY-MM-DD")
    );

    console.log(
      nameValidation,
      " ",
      lnameValidation,
      " ",
      emailValidation,
      " ",
      cemailValidation
    );
    if (
      nameValidation &&
      lnameValidation &&
      emailValidation &&
      cemailValidation &&
      check
    ) {
      makePostRequest();
    } else {
      console.log("something is missing");
      // console.log("check for email");
      // console.log('validation missing')
      setStatus("danger");
      setError("Please try to fill again!!");
    }
  };

  const handleFirstNameChange = (e) => {
    //console.log('name ',e.target.value)
    if (e.target.value) {
      setName(e.target.value);
      setNameValidation(true);
    } else {
      console.log("Validation check");
      setNameValidation(false);
    }
  };

  const handleLastNameChange = (e) => {
    //console.log('name ',e.target.value)
    if (e.target.value) {
      setLastName(e.target.value);
      setLnameValidation(true);
    } else {
      console.log("Validation check");
      setLnameValidation(false);
    }
  };

  const handleEmailChange = (e) => {
    // console.log('email ',e.target.value)
    if (e.target.value) {
      setEmail(e.target.value);
      setEmailValidation(true);
    } else {
      console.log("Validation check");
      setEmailValidation(false);
    }
  };

  const handleConfirmEmailChange = (e) => {
    // console.log('c email ',e.target.value)
    if (email === e.target.value) {
      console.log("emails match");
      setConfirmEmail(e.target.value);
      setCemailValidation(true);
      const temp = moment().format("YYYY-MM-DD");
      setDate(temp);
    } else {
      console.log("emails, not a match");
      setCemailValidation(false);
    }
  };

  const handleCheckClick = () => {
    setCheck(!check);
  };

  const makePostRequest = async () => {
    const data = {
      email: email,
      first_name: name,
      last_name: lastName,
      is_active: true,
      join_at: date,
    };
    try {
      let res = await axios.post(
        "http://localhost:4000/api/addLotteryParticipants",
        data
      );
      console.log(`Status code: ${res.status}`);
      console.log(`Status text: ${res.statusText}`);
      setStatus("info");
      setError("Thank you for signing up!!");
    } catch (error) {
      // console.log(error.response.status);
      // if (error.response.status === 400) {
      console.log("User Profile already exists!");
      setStatus("danger");
      setError("User Profile already exists!!");
      // }else {
      //   console.log('falling here')
      // }
      clear();
    }
  };
  const clear = () => {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cemail").value = "";
  };
  return (
    <div className="FormPage">
      <img src={LotteryLunch} className="lotteryLogo" alt="logo" />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form
                  className="needs-validation"
                  onSubmit={(e) => handleRegister(e)}
                  noValidate
                >
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your first name"
                      icon="user"
                      group
                      type="text"
                      validate
                      required
                      error="wrong"
                      success="right"
                      id="fname"
                      className="form-control"
                      onChange={handleFirstNameChange}
                    >
                      <div className="invalid-feedback">
                        Please provide a valid first name.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>

                    <MDBInput
                      label="Your last name"
                      icon="user-tag"
                      group
                      type="text"
                      validate
                      required
                      error="wrong"
                      success="right"
                      id="lname"
                      onChange={handleLastNameChange}
                    >
                      <div className="invalid-feedback">
                        Please provide a valid last name.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      required
                      error="wrong"
                      success="right"
                      id="email"
                      onChange={handleEmailChange}
                    >
                      <div className="invalid-feedback">
                        Please provide a valid email.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>

                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      required
                      error="wrong"
                      success="right"
                      id="cemail"
                      onChange={handleConfirmEmailChange}
                    >
                      {" "}
                      <div className="invalid-feedback">
                        Please provide a valid email.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>
                  </div>
                  <MDBCol md="4" className="mb-3">
                    <div className="custom-control custom-checkbox pl-3">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                        onChange={handleCheckClick}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </MDBCol>
                  {error && (
                    <MDBAlert color={status} dismiss>
                      {error}
                    </MDBAlert>
                  )}
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default FormPage;

//  <MDBInput
// label="Your password"
// icon="lock"
// group
// type="password"
// validate
// />
