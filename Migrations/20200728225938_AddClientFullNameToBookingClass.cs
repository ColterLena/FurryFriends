using Microsoft.EntityFrameworkCore.Migrations;

namespace FurryFriends.Migrations
{
    public partial class AddClientFullNameToBookingClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClientFullName",
                table: "Bookings",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientFullName",
                table: "Bookings");
        }
    }
}
