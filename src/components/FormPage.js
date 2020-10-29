import React, { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import LotteryLunch from "../images/lotterylunch.png";

import Thanking from "./thankingPage";
import helper from "../services/helperFunctions";
import FormComp from "../components/FormComp";

const FormPage = () => {
  const API_TOKEN = `${process.env.REACT_APP_SEND_IN_BLUE_TOKEN}`;

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
  const [thankPage, setThankPage] = useState(true);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
     fetchInterests();
       
  }, []);

  const fetchInterests = async () => {
    let response;
    try {
      response = await axios.get("http://localhost:4000/api/interests");
      console.log("Interests are ", response.data);
      setInterests(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
      setStatus("danger");
      setError("Please try to fill again!!");
    }
  };

  const handleFirstNameChange = (e) => {
    if (e.target.value.length >= 2) {
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

  const handleNewsletterSubscription = () => {
    console.log("subscribed to newsletter");
    console.log("email is ", email);
    helper(API_TOKEN, email);
  };

  const makePostRequest = async () => {
    const data = {
      email: email,
      first_name: name,
      last_name: lastName,
      join_at: date,
    };
    try {
      let res = await axios.post("http://localhost:4000/api/users", data);
      console.log(`Status code: ${res.status}`);
      console.log(`Status text: ${res.statusText}`);
      // setStatus("info");
      // setError("Thank you for signing up!!");
      setThankPage(false);
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
    document.getElementById("newslettercheck").checked = "false";
  };
  return (
    <div>
      {thankPage ? (
        <FormComp
          handleRegister={handleRegister}
          status={status}
          error={error}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handleConfirmEmailChange={handleConfirmEmailChange}
          handleCheckClick={handleCheckClick}
          handleNewsletterSubscription={handleNewsletterSubscription}
          interests={interests}
        />
      ) : (
        <Thanking />
      )}
    </div>
  );
};

export default FormPage;
