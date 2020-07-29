﻿// <auto-generated />
using FurryFriends.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace FurryFriends.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20200726194656_AddClientAndDogWalkerRequiredFields")]
    partial class AddClientAndDogWalkerRequiredFields
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("FurryFriends.Models.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("AboutMe")
                        .HasColumnType("text");

                    b.Property<string>("DogBreed")
                        .HasColumnType("text");

                    b.Property<string>("DogName")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HomeAddress")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("FurryFriends.Models.DogWalker", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("AboutMe")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FeePerWalk")
                        .HasColumnType("text");

                    b.Property<string>("Friday")
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HomeAddress")
                        .HasColumnType("text");

                    b.Property<string>("Monday")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Saturday")
                        .HasColumnType("text");

                    b.Property<string>("Sunday")
                        .HasColumnType("text");

                    b.Property<string>("Thursday")
                        .HasColumnType("text");

                    b.Property<string>("Tuesday")
                        .HasColumnType("text");

                    b.Property<string>("Wednesday")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("DogWalkers");
                });
#pragma warning restore 612, 618
        }
    }
}
