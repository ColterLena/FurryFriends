import React from 'react'

export function BookAWalkClient() {
  return (
    <>
      <div class="container" id="CreateAnAccountForm">
        <form>
          <div class="form-row" id="CreateAnAccountDropDown">
            <label for="exampleFormControlSelect1">
              Which Walker Would You Like to Use?
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputEmail4">
              What Day Would You Like to Book the Appointment?
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group">
            <label for="inputPassword4">
              What Time Would You Like to Book the Appointment?
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="form-group">
            <label for="inputAddress">What is the Pick Up Address?</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-group">
            <label for="inputZip">City</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="inputZip">State</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="inputZip">Zip Code</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="inputZip">What Are Your Pick-Up Instructions?</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <button type="submit" class="btn btn-primary">
            Book a Walk
          </button>
        </form>
      </div>
    </>
  )
}
