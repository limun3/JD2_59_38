namespace BookingApp.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<BookingApp.Models.BAContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BookingApp.Models.BAContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Manager"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Manager" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "AppUser"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "AppUser" };

                manager.Create(role);
            }

            var userStore = new UserStore<BAIdentityUser>(context);
            var userManager = new UserManager<BAIdentityUser>(userStore);

            if (!context.Users.Any(u => u.UserName == "admin"))
            {
                var user1 = new BAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@gmail.com", PasswordHash = BAIdentityUser.HashPassword("admin") };
                userManager.Create(user1);
                userManager.AddToRole(user1.Id, "Admin");
            }

            BAIdentityUser user = new BAIdentityUser() { Id = "kandji", UserName = "kandji", Email = "nkanjeric@gmail.com", PasswordHash = BAIdentityUser.HashPassword("kandjaman") };

            if (!context.Users.Any(u => u.UserName == "kandji"))
            {
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Manager");
            }

            if (!context.Users.Any(u => u.UserName == "alekso"))
            {
                var user1 = new BAIdentityUser() { Id = "alekso", UserName = "alekso", Email = "aleksa.janjic@hotmail.com", PasswordHash = BAIdentityUser.HashPassword("lizaljke") };
                userManager.Create(user1);
                userManager.AddToRole(user1.Id, "AppUser");
            }

            //user.Accomodations = new List<Accommodation>();
            //user.Comments = new List<Comment>();
            //user.RoomReservations = new List<RoomReservations>();

            context.SaveChanges();

            AppUser appUser = new AppUser();
            appUser.Id = 1;
            appUser.Name = "Juzer";
            appUser.LastName = "Juzerovic";
            appUser.Accommodations = new List<Accommodation>();

            Country country = new Country();
            country.Id = 1;
            country.Name = "Srbija";
            country.Code = "Srb";
            country.Regions = new List<Region>();

            Region region = new Region();
            region.Country = country;
            region.Id = 1;
            region.Name = "Vojvodina";
            region.Places = new List<Place>();
            country.Regions.Add(region);

            Place place = new Place();
            place.Id = 1;
            place.Name = "Vojvodina";
            place.Region = region;
            place.Accommodations = new List<Accommodation>();
            region.Places.Add(place);

            AccommodationType accType = new AccommodationType();
            accType.Id = 1;
            accType.Name = "accType";
            accType.Accommodations = new List<Accommodation>();

            Accommodation acc = new Accommodation();
            acc.Id = 1;
            acc.Address = "addr";
            acc.Approved = false;
            acc.AverageGrade = 0;
            acc.Comments = new List<Comment>();
            acc.Description = "Desc1";
            acc.ImageUrl = string.Empty;
            acc.Latitude = 0;
            acc.Longitude = 0;
            acc.Name = "AccomName";
            //acc.Owner = user;
            acc.Place = place;
            acc.Rooms = new List<Room>();
            accType.Accommodations.Add(acc);
    

            Room room = new Room();
            room.Accommodation = acc;
            room.BedCount = 3;
            room.Description = "Room1";
            room.Id = 1; ;
            room.PricePerNight = 100;
            room.RoomNumber = 1;
            room.RoomReservations = new List<RoomReservations>();
            acc.Rooms.Add(room);

            RoomReservations roomRes = new RoomReservations();
            roomRes.EndData = DateTime.Now;
            roomRes.StartDate = DateTime.Now;
            roomRes.TimeStamp = DateTime.Now;
           // roomRes.AppUser = user;
            roomRes.Room = room;
            roomRes.Id = 1;

            Comment comm = new Comment();
            comm.AccommodationId = acc.Id;
            comm.Grade = 0;
            comm.Text = "Sve je to super.";
           // comm.AppUser = user;
            comm.AppUserId = 1;

            try
            {
                context.Accommodations.Add(acc);
                context.AccommodationTypes.Add(accType);
                context.AppUsers.Add(appUser);
                context.Comments.Add(comm);
                context.Countries.Add(country);
                context.Places.Add(place);
                context.Regions.Add(region);
                context.RoomReservations.Add(roomRes);
                context.Rooms.Add(room);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}
