import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios';
import moment from 'moment';

const FormPage = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail]= useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [date, setDate]= useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('name ', name, 'email ', email, 'c email ', confirmEmail,'date', moment().format('YYYY-MM-DD'))
        
        if(name && lastName && confirmEmail && date)
        {
          makePostRequest()
        }else {
          console.log('something is missing');
        }
    }

    const handleFirstNameChange = (e) =>{
        //console.log('name ',e.target.value)
        if(e.target.value){
          setName(e.target.value)
        }else {
          console.log('Validation check')
        }
        
    }

    const handleLastNameChange = (e) =>{
      //console.log('name ',e.target.value)
      if(e.target.value){
      setLastName(e.target.value)
    }else {
      console.log('Validation check')
    }
  }

    const handleEmailChange = (e) => {
        // console.log('email ',e.target.value)
        if(e.target.value){
        setEmail(e.target.value)
      }else {
        console.log('Validation check')
      }
    }

    const handleConfirmEmailChange = (e) => {
        // console.log('c email ',e.target.value)
        if(email === e.target.value){
          console.log('emails match')
          setConfirmEmail(e.target.value)
          const temp = moment().format('YYYY-MM-DD');
        setDate(temp)
        }else{
          console.log('emails, not a match')
        }
       
    }

    const makePostRequest = async () =>{
      const data ={
    "email":email,
    "first_name":name, 
    "last_name":lastName, 
    "is_active":true,
     "join_at":date
      }
        let res = await axios.post('http://localhost:4000/api/addLotteryParticipants', data)
        console.log(`Status code: ${res.status}`);
        console.log(`Status text: ${res.statusText}`);
    }
  return (
      
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
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
                    onChange={handleFirstNameChange}>
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
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
                
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit" onClick={(e)=>handleRegister(e)}>
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