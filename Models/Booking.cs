using System.ComponentModel.DataAnnotations;

namespace FurryFriends.Models
{
    public class Booking
    {
        public int Id { get; set; }

        [Required]
        public string DogWalkerFullName { get; set; }

        [Required]
        public string DogWalkerEmail { get; set; }

        [Required]
        public string ClientFullName { get; set; }

        [Required]
        public string ClientEmail { get; set; }

        [Required]
        public string ClientPhoneNumber { get; set; }

        [Required]
        public string DayOfBooking { get; set; }

        [Required]
        public string TimeOfBooking { get; set; }

        [Required]
        public string PickUpAddress { get; set; }

        [Required]
        public string PickUpInstructions { get; set; }
    }
}