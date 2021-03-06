﻿// <auto-generated />
using LmsAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LmsAPI.Migrations
{
    [DbContext(typeof(BooksListContext))]
    partial class BooksListContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("LmsAPI.Models.BooksList", b =>
                {
                    b.Property<int>("BooksListId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("BookCategory")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("BookIsbn")
                        .HasColumnType("nvarchar(13)");

                    b.Property<string>("BookPublisher")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("BookTitle")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("BooksAuthor")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("BooksListId");

                    b.ToTable("BooksLists");
                });

            modelBuilder.Entity("LmsAPI.Models.UsersList", b =>
                {
                    b.Property<int>("UsersListId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("UserEmail")
                        .HasColumnType("nvarchar(320)");

                    b.Property<string>("UserPassword")
                        .HasColumnType("nvarchar(5)");

                    b.HasKey("UsersListId");

                    b.ToTable("UsersLists");
                });
#pragma warning restore 612, 618
        }
    }
}
