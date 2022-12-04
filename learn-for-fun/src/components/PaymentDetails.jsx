import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import axios from "axios";

function PaymentDetails(props) {

  const email = props.email;
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  
  function SaveCardDetails() {
    if (cardName !== '' && cardNumber !== '' && expiry !== '' && cvvNumber !== ''){
      const data = [{ email: email, cardName: cardName, cardNumber: cardNumber, expiry: expiry, cvv: cvvNumber }];

      axios.post('http://localhost/addCard.php', data)
      .then(res => {
        console.log(res.data);
        if (res.data == "success") {
          console.log("yay");
        }
        else {console.log("boo")};
      });
    }
  };
  
  function ShowPaymentDetails() {
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
    const addPaymentDetails = document.getElementById("addPaymentDetails");
    addPaymentDetails.classList.add("d-none");
  };
  
  // https://stackoverflow.com/questions/65454587/how-to-make-autospace-after-every-4-digit-in-react
  const FormatAndSetCardName = e => {
    const inputVal = e.target.value;
    setCardName(inputVal);
  };
  
  const FormatAndSetCardNumber = e => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
  
    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
  
    const splits = inputNumbersOnly.match(/.{1,4}/g);
  
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
  
    setCardNumber(spacedNumber);
  };
  
  const FormatAndSetExpiry = e => {
    const inputValue = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputValue.replace(/\D/g, "");
  
    if (inputNumbersOnly.length > 5) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 4);
    }
  
    const splits = inputNumbersOnly.match(/.{1,2}/g);
    let slash = "";
    if (splits) {
      slash = splits.join("/");
    }
  
    setExpiry(slash);
  };
  
  const FormatAndSetCVV = e => {
    const inputVal = e.target.value;
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
  
    if (inputNumbersOnly.length > 3) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 3);
    }
  
    setCvvNumber(inputNumbersOnly);
  };

  return (
    <div>
      <div className="mx-auto">

        <p className="alert alert-success">Input Your Details</p>

        <form role="form" onSubmit={SaveCardDetails}>
          <div className="form-group" name="CARD NAME">
            <label >Full name (on the card)</label>
            <input type="text" name="username" value={cardName} placeholder="Name on the card" className="form-control" 
            onChange={FormatAndSetCardName} required />
          </div>

          <div className="form-group" name="CARD NUMBER">
            <label >Card number</label>
            <div className="input-group">
              <input type="text" value={cardNumber} onChange={FormatAndSetCardNumber}
                id="cardNumber" name="cardNumber" placeholder="Your card number" className="form-control" required />

            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group" name="EXPIRY">
                <label><span className="hidden-xs">Expiration</span></label>
                <div className="input-group">
                  <input type="text" onChange={FormatAndSetExpiry} name="expiry" placeholder="MM/YY"  className="form-control" value={expiry} maxLength={5}
                    required />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group mb-4" name="CVV">
                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                  <i className="fa fa-question-circle"></i>
                </label>
                <input type="text" maxLength={3} className="form-control" name="cvv" value={cvvNumber}
                  onChange={FormatAndSetCVV} required />
              </div>
            </div>
          </div>
          <button type="submit">
            Save
          </button>
          &nbsp;
          <button onClick={ShowPaymentDetails}>
            Cancel
          </button>
        </form>

      </div>
    </div>
  )
}


export default PaymentDetails