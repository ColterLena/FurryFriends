using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;


namespace FurryFriends.Models
{
    public class Client
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [JsonIgnore]
        public string HashedPassword { get; set; }

        public string Password
        {
            set
            {
                this.HashedPassword = new PasswordHasher<Client>().HashPassword(this, value);
            }
        }
        public bool IsValidPassword(string password)
        {
            var passwordVerification = new PasswordHasher<Client>().VerifyHashedPassword(this, this.HashedPassword, password);

            return passwordVerification == PasswordVerificationResult.Success;
        }
        public string HomeAddress { get; set; }
        public string DogName { get; set; }
        public string DogBreed { get; set; }
        public string AboutMe { get; set; }
    }
}