import axios from "axios";

const helper = (API_TOKEN, email) => {
 
  let config = {
    method: "post",
    url: "https://api.sendinblue.com/v3/contacts",
    headers: {
      "Content-Type": "application/json",
      "api-key": API_TOKEN,
    },
    data: JSON.stringify({ email: email }),
  };
if(!email){

  return alert('Please enter the email');
}
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

    })
    .catch(function (error) {
      console.log(error);
      console.log("emails exists");
     alert('You have already subscribed to our newsletter!');
    });
};
export default helper;