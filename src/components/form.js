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

const FormPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
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

    if (name && lastName && confirmEmail && date) {
      makePostRequest();
      clear();
    } else {
      console.log("something is missing");
      console.log("check for email");
    }
  };

  const handleFirstNameChange = (e) => {
    //console.log('name ',e.target.value)
    if (e.target.value) {
      setName(e.target.value);
    } else {
      console.log("Validation check");
    }
  };

  const handleLastNameChange = (e) => {
    //console.log('name ',e.target.value)
    if (e.target.value) {
      setLastName(e.target.value);
    } else {
      console.log("Validation check");
    }
  };

  const handleEmailChange = (e) => {
    // console.log('email ',e.target.value)
    if (e.target.value) {
      setEmail(e.target.value);
    } else {
      console.log("Validation check");
    }
  };

  const handleConfirmEmailChange = (e) => {
    // console.log('c email ',e.target.value)
    if (email === e.target.value) {
      console.log("emails match");
      setConfirmEmail(e.target.value);
      const temp = moment().format("YYYY-MM-DD");
      setDate(temp);
    } else {
      console.log("emails, not a match");
    }
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
    } catch (error) {
      // console.log(error.response.status);
      // if (error.response.status === 400) {
        console.log("Username already exists!");
        setError("Username already exists!!");
      // }else {
      //   console.log('falling here')
      // }
      clear();
    }
   
  };
  const clear = () => {
   // setName('');
    document.getElementById('fname').value=''
    document.getElementById('lname').value=''
    document.getElementById('email').value=''
    document.getElementById('cemail').value=''
    
    //setLastName('');
    // //setEmail('');
    // setConfirmEmail('');
    // setDate('');
    // setError('');
  }
  return (
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
                    onChange={handleFirstNameChange}
                  >
                    <div className="invalid-feedback">
                      Please provide a valid first name.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBInput>

                  <MDBInput
                    label="Your last name"
                    icon="user"
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
                  />
                </div>
                <MDBCol md="4" className="mb-3">
                  <div className="custom-control custom-checkbox pl-3">
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
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
                  <MDBAlert color="info" dismiss>
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
