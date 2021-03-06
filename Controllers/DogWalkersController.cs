using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FurryFriends.Models;

namespace FurryFriends.Controllers
{
    // All of these routes will be at the base URL:     /api/DogWalkers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case DogWalkersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class DogWalkersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public DogWalkersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/DogWalkers
        //
        // Returns a list of all your DogWalkers
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogWalker>>> GetDogWalkers(string filter)
        {
            // Uses the database context in `_context` to request all of the DogWalkers and
            // return them as a JSON array.
            if (filter == null)
            {
                return await _context.DogWalkers.ToListAsync();
            }
            else
            {
                return await _context.DogWalkers.Where(dogWalker => dogWalker.Email.Contains(filter)).ToListAsync();
            }
        }

        // GET: api/DogWalkers/5
        //
        // Fetches and returns a specific dogWalker by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<DogWalker>> GetDogWalker(int id)
        {
            // Find the dogWalker in the database using `FindAsync` to look it up by id
            var dogWalker = await _context.DogWalkers.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (dogWalker == null)
            {
                // Return a `404` response to the client indicating we could not find a dogWalker with this id
                return NotFound();
            }

            //  Return the dogWalker as a JSON object.
            return dogWalker;
        }

        // PUT: api/DogWalkers/5
        //
        // Update an individual dogWalker with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a DogWalker
        // variable named dogWalker. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our DogWalker POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogWalker(int id, DogWalker dogWalker)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != dogWalker.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in dogWalker to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from dogWalker
            _context.Entry(dogWalker).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!DogWalkerExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(dogWalker)
            //
            return NoContent();
        }

        // POST: api/DogWalkers
        //
        // Creates a new dogWalker in the database.
        //
        // The `body` of the request is parsed and then made available to us as a DogWalker
        // variable named dogWalker. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our DogWalker POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<DogWalker>> PostDogWalker(DogWalker dogWalker)
        {
            var alreadyHaveUserWithTheEmail = _context.DogWalkers.Any(existingDogWalker => existingDogWalker.Email.ToLower() == dogWalker.Email.ToLower());
            if (alreadyHaveUserWithTheEmail)
            {
                // Make a custom error response
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "This account already exists!" }
                };

                // Return our error with the custom response
                return BadRequest(response);
            }

            // Indicate to the database context we want to add this new record
            _context.DogWalkers.Add(dogWalker);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetUser", new { id = dogWalker.Id }, dogWalker);
        }

        // DELETE: api/DogWalkers/5
        //
        // Deletes an individual dogWalker with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogWalker(int id)
        {
            // Find this dogWalker by looking for the specific id
            var dogWalker = await _context.DogWalkers.FindAsync(id);
            if (dogWalker == null)
            {
                // There wasn't a dogWalker with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.DogWalkers.Remove(dogWalker);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(dogWalker)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing dogWalker by the supplied id
        private bool DogWalkerExists(int id)
        {
            return _context.DogWalkers.Any(dogWalker => dogWalker.Id == id);
        }
    }
}
