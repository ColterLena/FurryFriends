import React from 'react'

export function CreateAnAccount() {
  return (
    <>
      <div class="container" id="CreateAnAccountForm">
        <form>
          <div class="form-row" id="CreateAnAccountDropDown">
            <label for="exampleFormControlSelect1">What Type of Account?</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Client</option>
              <option>Dog Walker</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
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
            <label for="inputZip">Please Upload a Photo of Yourself</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="inputZip">
              If You Are a Client, What is Your Dog's Name?
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="inputZip">
              Please Provide a Brief "About Me" Description for Your Profile
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <button type="submit" class="btn btn-primary">
            Create An Account
          </button>
        </form>
      </div>
    </>
  )
}
