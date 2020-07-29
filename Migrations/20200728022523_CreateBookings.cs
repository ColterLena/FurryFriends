using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace FurryFriends.Migrations
{
    public partial class CreateBookings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ClientId = table.Column<string>(nullable: false),
                    DogWalkerId = table.Column<string>(nullable: false),
                    ClientEmail = table.Column<string>(nullable: false),
                    ClientPhoneNumber = table.Column<string>(nullable: false),
                    DayOfBooking = table.Column<string>(nullable: false),
                    TimeOfBooking = table.Column<string>(nullable: false),
                    PickUpAddress = table.Column<string>(nullable: false),
                    PickUpInstructions = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bookings");
        }
    }
}
