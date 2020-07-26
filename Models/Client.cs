namespace FurryFriends.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string HomeAddress { get; set; }
        public string DogName { get; set; }
        public string DogBreed { get; set; }
        public string AboutMe { get; set; }
    }
}