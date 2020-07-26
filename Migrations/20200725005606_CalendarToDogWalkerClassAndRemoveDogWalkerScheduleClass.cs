using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace FurryFriends.Migrations
{
    public partial class CalendarToDogWalkerClassAndRemoveDogWalkerScheduleClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DogWalkerSchedules");

            migrationBuilder.AddColumn<string>(
                name: "Friday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Monday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Saturday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Sunday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Thursday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tuesday",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Wednesday",
                table: "DogWalkers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Friday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Monday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Saturday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Sunday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Thursday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Tuesday",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Wednesday",
                table: "DogWalkers");

            migrationBuilder.CreateTable(
                name: "DogWalkerSchedules",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DogWalkerId = table.Column<int>(type: "integer", nullable: false),
                    Friday = table.Column<string>(type: "text", nullable: true),
                    Monday = table.Column<string>(type: "text", nullable: true),
                    Saturday = table.Column<string>(type: "text", nullable: true),
                    Sunday = table.Column<string>(type: "text", nullable: true),
                    Thursday = table.Column<string>(type: "text", nullable: true),
                    Tuesday = table.Column<string>(type: "text", nullable: true),
                    Wednesday = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DogWalkerSchedules", x => x.Id);
                });
        }
    }
}
