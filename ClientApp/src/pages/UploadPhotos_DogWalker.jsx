import React from 'react'

export function UploadPhotos_DogWalker() {
  return (
    <>
      <div class="container" id="CreateAnAccountForm">
        <form>
          <div class="form-row">
            <label for="inputEmail4">Upload Your Photo Here</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Will Add Photo Upload Later"
            />
          </div>
          <div class="form-group">
            <label for="inputId">What is the Client's ID Number?</label>
            <input
              type="text"
              class="form-control"
              id="ID"
              placeholder="4587"
            />
          </div>
          <div class="form-group">
            <label for="DateOfWalk">
              When Did the Walk Take Place?(Format: DD/MM/YYYY at HH:MM AM/PM)
            </label>
            <input
              type="text"
              class="form-control"
              id="DateOfWalk"
              placeholder="01/01/2020 12:00 AM"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit the Photo
          </button>
        </form>
      </div>
    </>
  )
}
