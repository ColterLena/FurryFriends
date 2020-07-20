import React from 'react'

export function LogIn() {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
      </div>
    </form>
  )
}
