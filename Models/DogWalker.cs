using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace FurryFriends.Models
{
    public class DogWalker
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
                this.HashedPassword = new PasswordHasher<DogWalker>().HashPassword(this, value);
            }
        }
        public bool IsValidPassword(string password)
        {
            var passwordVerification = new PasswordHasher<DogWalker>().VerifyHashedPassword(this, this.HashedPassword, password);

            return passwordVerification == PasswordVerificationResult.Success;
        }
        public string HomeAddress { get; set; }
        public string FeePerWalk { get; set; }
        public string AboutMe { get; set; }
        public string Monday { get; set; }
        public string Tuesday { get; set; }
        public string Wednesday { get; set; }
        public string Thursday { get; set; }
        public string Friday { get; set; }
        public string Saturday { get; set; }
        public string Sunday { get; set; }
    }
}