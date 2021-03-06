using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FurryFriends.Models;
using MimeKit;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;

namespace FurryFriends.Controllers
{
    // All of these routes will be at the base URL:     /api/Bookings
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case BookingsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly DatabaseContext _context;
        readonly protected string universalEmail;

        readonly protected string universalPassword;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public BookingsController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            universalEmail = config["universalEmail"];
            universalPassword = config["universalPassword"];
        }

        // This is the variable you use to have access to your database
        //         
        // public DatabaseContext(IConfiguration configuration)
        // {
        //  this.universalEmail = configuration["universalEmail"];
        // }
        //         // Constructor that recives a reference to your database context
        //         // and stores it in _context for you to use in your API methods
        //         public BookingsController(DatabaseContext context)
        //         {
        //             _context = context;
        //         }

        // GET: api/Bookings
        //
        // Returns a list of all your Bookings
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
            // Uses the database context in `_context` to request all of the Bookings and
            // return them as a JSON array.
            return await _context.Bookings.ToListAsync();
        }

        // GET: api/Bookings/5
        //
        // Fetches and returns a specific booking by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBooking(int id)
        {
            // Find the booking in the database using `FindAsync` to look it up by id
            var booking = await _context.Bookings.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (booking == null)
            {
                // Return a `404` response to the client indicating we could not find a booking with this id
                return NotFound();
            }

            //  Return the booking as a JSON object.
            return booking;
        }

        // PUT: api/Bookings/5
        //
        // Update an individual booking with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Booking
        // variable named booking. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Booking POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking(int id, Booking booking)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != booking.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in booking to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from booking
            _context.Entry(booking).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!BookingExists(id))
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
            // return Ok(booking)
            //
            return NoContent();
        }

        // POST: api/Bookings
        //
        // Creates a new booking in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Booking
        // variable named booking. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Booking POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Booking>> PostBooking(Booking booking)
        {
            // Indicate to the database context we want to add this new record
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("FurryFriends", "furryfriendsdogwalkingfl@gmail.com"));
                message.To.Add(new MailboxAddress($"{booking.DogWalkerFullName}", $"{booking.DogWalkerEmail}"));
                message.Subject = $"You Have a New Booking with {booking.ClientFullName}";
                message.Body = new TextPart("plain")
                {
                    Text = $"Hi {booking.DogWalkerFullName}, you just received a request from {booking.ClientFullName} to walk their dog on {booking.DayOfBooking} at {booking.TimeOfBooking}. The pick up address is {booking.PickUpAddress}, and the pick up instructions are: {booking.PickUpInstructions}. If you have any questions or can't perform this service, please contact the client at {booking.ClientPhoneNumber} or {booking.ClientEmail}."
                };

                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {

                    client.Connect("smtp.gmail.com", 587, false);

                    //SMTP server authentication if needed
                    client.Authenticate(universalEmail, universalPassword);

                    client.Send(message);

                    client.Disconnect(true);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Error occured");
            }

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetBooking", new { id = booking.Id }, booking);
        }

        // DELETE: api/Bookings/5
        //
        // Deletes an individual booking with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            // Find this booking by looking for the specific id
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                // There wasn't a booking with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Bookings.Remove(booking);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(booking)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing booking by the supplied id
        private bool BookingExists(int id)
        {
            return _context.Bookings.Any(booking => booking.Id == id);
        }
    }
}
