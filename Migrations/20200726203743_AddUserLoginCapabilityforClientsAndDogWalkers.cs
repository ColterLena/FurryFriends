using Microsoft.EntityFrameworkCore.Migrations;

namespace FurryFriends.Migrations
{
    public partial class AddUserLoginCapabilityforClientsAndDogWalkers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Clients");

            migrationBuilder.AddColumn<string>(
                name: "HashedPassword",
                table: "DogWalkers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HashedPassword",
                table: "Clients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HashedPassword",
                table: "DogWalkers");

            migrationBuilder.DropColumn(
                name: "HashedPassword",
                table: "Clients");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "DogWalkers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Clients",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
