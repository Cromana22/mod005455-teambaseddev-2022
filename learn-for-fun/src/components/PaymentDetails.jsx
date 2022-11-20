import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
       
function PaymentDetails() {
  return (
    <div>
      <div class="mx-auto">

        <p class="alert alert-success">Input Your Details</p>

        <form role="form">
          <div class="form-group">
            <label for="username">Full name (on the card)</label>
            <input type="text" name="username" placeholder="Name on the card" required class="form-control" />
          </div>

          <div class="form-group">
            <label for="cardNumber">Card number</label>
            <div class="input-group">
              <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-8">
              <div class="form-group">
                <label><span class="hidden-xs">Expiration</span></label>
                <div class="input-group">
                  <input type="number" placeholder="MM" name="" class="form-control" required />
                  <input type="number" placeholder="YY" name="" class="form-control" required />
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group mb-4">
                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                            <i class="fa fa-question-circle"></i>
                                        </label>
                <input type="text" required class="form-control" />
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


export default PaymentDetails