using Microsoft.EntityFrameworkCore.Migrations;

namespace FurryFriends.Migrations
{
    public partial class MadeChangesToBookingClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DogWalkerEmail",
                table: "Bookings",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DogWalkerFullName",
                table: "Bookings",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DogWalkerEmail",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "DogWalkerFullName",
                table: "Bookings");
        }
    }
}
