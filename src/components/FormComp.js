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
import Select from "react-select";
import chroma from 'chroma-js';

const FormComp = (props) => {
  console.log("interests ", props.interests);
  const options = props.interests.map((interest) => ({
    value: interest.interests,
    label: interest.interests,
    color: "#5243AA"
  }));

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      console.log('data.color ',data.color);
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };
  

  return (
    <div className='FormPage'>
      {/* <img src={LotteryLunch} className='lotteryLogo' alt='logo' /> */}
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <MDBCard>
              <MDBCardBody>
                <form
                  className='needs-validation'
                  onSubmit={(e) => props.handleRegister(e)}
                  noValidate
                >
                  <p className='h4 text-center py-4'>Sign up</p>
                  <div className='grey-text'>
                    <MDBInput
                      label='Your first name'
                      icon='user'
                      group
                      type='text'
                      validate
                      required
                      error='wrong'
                      success='right'
                      id='fname'
                      className='form-control'
                      onChange={props.handleFirstNameChange}
                    >
                      <div className='invalid-feedback'>
                        Please provide a valid first name.
                      </div>
                    </MDBInput>

                    <MDBInput
                      label='Your last name'
                      icon='user-tag'
                      group
                      type='text'
                      validate
                      required
                      error='wrong'
                      success='right'
                      id='lname'
                      onChange={props.handleLastNameChange}
                    >
                      <div className='invalid-feedback'>
                        Please provide a valid last name.
                      </div>
                    </MDBInput>
                    <MDBInput
                      label='Your email'
                      icon='envelope'
                      group
                      type='email'
                      validate
                      required
                      error='wrong'
                      success='right'
                      id='email'
                      onChange={props.handleEmailChange}
                    >
                      <div className='invalid-feedback'>
                        Please provide a valid email.
                      </div>
                    </MDBInput>

                    <MDBInput
                      label='Confirm your email'
                      icon='exclamation-triangle'
                      group
                      type='text'
                      validate
                      required
                      error='wrong'
                      success='right'
                      id='cemail'
                      onChange={props.handleConfirmEmailChange}
                    >
                      {" "}
                      <div className='invalid-feedback'>
                        Please provide a valid email.
                      </div>
                    </MDBInput>
                    <div className="select">
                    {props.interests && (
                      <Select
                        closeMenuOnSelect={false}
                        isMulti
                        defaultValue='Select Interests'
                        options={options}
                        styles={colourStyles}
                      />
                    )}</div>
                  </div>
                  <MDBCol md='4' className='mb-3'>
                    <div className='custom-control custom-checkbox pl-3'>
                      <input
                        className='custom-control-input'
                        type='checkbox'
                        value=''
                        id='invalidCheck'
                        required
                        onChange={props.handleCheckClick}
                      />
                      <label
                        className='custom-control-label changeLabel'
                        htmlFor='invalidCheck'
                      >
                        Agree to terms and conditions
                      </label>
                      <div className='invalid-feedback'>
                        You must agree before submitting.
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md='4' className='mb-3'>
                    <div className='custom-control custom-checkbox pl-3 '>
                      <input
                        className='custom-control-input'
                        type='checkbox'
                        id='newslettercheck'
                        onChange={props.handleNewsletterSubscription}
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='newslettercheck'
                      >
                        {" "}
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </MDBCol>
                  {props.error && (
                    <MDBAlert color={props.status} dismiss>
                      {props.error}
                    </MDBAlert>
                  )}
                  <div className='text-center py-4 mt-3'>
                    <MDBBtn color='cyan' type='submit'>
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

export default FormComp;
