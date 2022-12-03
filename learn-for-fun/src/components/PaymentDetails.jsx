import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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

  const [expDate, setExpDate] = useState("");

  const formatAndSetExpirationDate = e => {
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

    setExpDate(slash);
  }

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
                id="cardNumber" name="cardNumber" placeholder="Your card number" className="form-control" required />

            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group">
                <label><span className="hidden-xs">Expiration</span></label>
                <div className="input-group">
                  <input type="text" onChange={formatAndSetExpirationDate}  
                  placeholder="MM/YY"  className="form-control" value={expDate} maxLength={5}
                    required />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group mb-4">
                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                  <i className="fa fa-question-circle"></i>
                </label>
                <input type="text" maxLength={3} required className="form-control"
                  onChange={(e) => cookies.set('CVVNumber', e.target.value, { path: '/' })} />
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


export default PaymentDetails