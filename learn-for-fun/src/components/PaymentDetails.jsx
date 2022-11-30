import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";






function PaymentDetails() {
  const [ccNumber, setCcNumber] = useState("");
  // https://stackoverflow.com/questions/65454587/how-to-make-autospace-after-every-4-digit-in-react
  const formatAndSetCcNumber = e => {
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

    setCcNumber(spacedNumber);
  };


  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }
  return (
    <div>
      <div className="mx-auto">

        <p className="alert alert-success">Input Your Details</p>

        <form role="form">
          <div className="form-group">
            <label >Full name (on the card)</label>
            <input type="text" name="username" placeholder="Name on the card" required className="form-control" />
          </div>

          <div className="form-group">
            <label >Card number</label>
            <div className="input-group">
              <input type="text" value={ccNumber} onChange={formatAndSetCcNumber}
                name="cardNumber" placeholder="Your card number" className="form-control" required />

            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group">
                <label><span className="hidden-xs">Expiration</span></label>
                <div className="input-group">
                  <input type="number" placeholder="MM" name="" className="form-control" maxLength={2} onInput={maxLengthCheck} required />
                  <input type="number" placeholder="YY" name="" className="form-control" maxLength={2} onInput={maxLengthCheck} required />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group mb-4">
                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                  <i className="fa fa-question-circle"></i>
                </label>
                <input type="text" maxLength={3} required className="form-control" />
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


export default PaymentDetails