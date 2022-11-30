import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
       
function PaymentDetails() {
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
              <input type="text" name="cardNumber" placeholder="Your card number" className="form-control" required />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group">
                <label><span className="hidden-xs">Expiration</span></label>
                <div className="input-group">
                  <input type="number" placeholder="MM" name="" className="form-control" required />
                  <input type="number" placeholder="YY" name="" className="form-control" required />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group mb-4">
                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                            <i className="fa fa-question-circle"></i>
                                        </label>
                <input type="text" required className="form-control" />
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


export default PaymentDetails