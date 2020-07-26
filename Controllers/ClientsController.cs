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
    // All of these routes will be at the base URL:     /api/Clients
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ClientsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ClientsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Clients
        //
        // Returns a list of all your Clients
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            // Uses the database context in `_context` to request all of the Clients and
            // return them as a JSON array.
            return await _context.Clients.ToListAsync();
        }

        // GET: api/Clients/5
        //
        // Fetches and returns a specific client by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            // Find the client in the database using `FindAsync` to look it up by id
            var client = await _context.Clients.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (client == null)
            {
                // Return a `404` response to the client indicating we could not find a client with this id
                return NotFound();
            }

            //  Return the client as a JSON object.
            return client;
        }

        // PUT: api/Clients/5
        //
        // Update an individual client with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Client
        // variable named client. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Client POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id, Client client)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != client.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in client to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from client
            _context.Entry(client).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ClientExists(id))
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
            // return Ok(client)
            //
            return NoContent();
        }

        // POST: api/Clients
        //
        // Creates a new client in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Client
        // variable named client. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Client POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            // Indicate to the database context we want to add this new record
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }

        // DELETE: api/Clients/5
        //
        // Deletes an individual client with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            // Find this client by looking for the specific id
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                // There wasn't a client with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Clients.Remove(client);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(client)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing client by the supplied id
        private bool ClientExists(int id)
        {
            return _context.Clients.Any(client => client.Id == id);
        }
    }
}
