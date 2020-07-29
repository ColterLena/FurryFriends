using Microsoft.EntityFrameworkCore.Migrations;

namespace FurryFriends.Migrations
{
    public partial class RemovedClientIdAndDogWalkerIdFromBookingClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "DogWalkerId",
                table: "Bookings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClientId",
                table: "Bookings",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DogWalkerId",
                table: "Bookings",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
