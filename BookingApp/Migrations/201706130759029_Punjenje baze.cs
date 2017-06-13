namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Punjenjebaze : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "appUserId", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "AccomodationType_Id", "dbo.AccommodationTypes");
            DropForeignKey("dbo.Comments", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "Place_Id", "dbo.Places");
            DropForeignKey("dbo.Rooms", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Comments", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Places", "Region_Id", "dbo.Regions");
            DropForeignKey("dbo.Regions", "Country_Id", "dbo.Countries");
            DropIndex("dbo.Accommodations", new[] { "AccomodationType_Id" });
            DropIndex("dbo.Accommodations", new[] { "Place_Id" });
            DropIndex("dbo.Accommodations", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "Accomodation_Id" });
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropIndex("dbo.RoomReservations", new[] { "User_Id" });
            DropIndex("dbo.Rooms", new[] { "Accomodation_Id" });
            DropIndex("dbo.Places", new[] { "Region_Id" });
            DropIndex("dbo.Regions", new[] { "Country_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "appUserId" });
            RenameColumn(table: "dbo.Accommodations", name: "User_Id", newName: "AppUser_Id");
            AddColumn("dbo.Accommodations", "Owner_Id", c => c.String(maxLength: 128));
            AddColumn("dbo.Comments", "AppUser_Id", c => c.Int());
            AddColumn("dbo.RoomReservations", "AppUser_Id", c => c.Int());
            AlterColumn("dbo.Accommodations", "AvrageGrade", c => c.Double(nullable: false));
            AlterColumn("dbo.Accommodations", "Latitude", c => c.Double(nullable: false));
            AlterColumn("dbo.Accommodations", "Longitude", c => c.Double(nullable: false));
            AlterColumn("dbo.Accommodations", "AccomodationType_Id", c => c.Int());
            AlterColumn("dbo.Accommodations", "Place_Id", c => c.Int());
            AlterColumn("dbo.Accommodations", "AppUser_Id", c => c.Int());
            AlterColumn("dbo.Comments", "Accomodation_Id", c => c.Int());
            AlterColumn("dbo.Comments", "User_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.RoomReservations", "Timestamp", c => c.DateTime(nullable: false));
            AlterColumn("dbo.RoomReservations", "User_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.Rooms", "Accomodation_Id", c => c.Int());
            AlterColumn("dbo.Places", "Region_Id", c => c.Int());
            AlterColumn("dbo.Regions", "Country_Id", c => c.Int());
            AlterColumn("dbo.Countries", "Code", c => c.String());
            CreateIndex("dbo.Accommodations", "AccomodationType_Id");
            CreateIndex("dbo.Accommodations", "Owner_Id");
            CreateIndex("dbo.Accommodations", "Place_Id");
            CreateIndex("dbo.Accommodations", "AppUser_Id");
            CreateIndex("dbo.Comments", "Accomodation_Id");
            CreateIndex("dbo.Comments", "User_Id");
            CreateIndex("dbo.Comments", "AppUser_Id");
            CreateIndex("dbo.RoomReservations", "User_Id");
            CreateIndex("dbo.RoomReservations", "AppUser_Id");
            CreateIndex("dbo.Rooms", "Accomodation_Id");
            CreateIndex("dbo.Places", "Region_Id");
            CreateIndex("dbo.Regions", "Country_Id");
            AddForeignKey("dbo.Accommodations", "Owner_Id", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.Accommodations", "AccomodationType_Id", "dbo.AccommodationTypes", "Id");
            AddForeignKey("dbo.Comments", "Accomodation_Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.Accommodations", "Place_Id", "dbo.Places", "Id");
            AddForeignKey("dbo.Rooms", "Accomodation_Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.Comments", "User_Id", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.Accommodations", "AppUser_Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Comments", "AppUser_Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Places", "Region_Id", "dbo.Regions", "Id");
            AddForeignKey("dbo.Regions", "Country_Id", "dbo.Countries", "Id");
            DropColumn("dbo.AspNetUsers", "appUserId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "appUserId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Regions", "Country_Id", "dbo.Countries");
            DropForeignKey("dbo.Places", "Region_Id", "dbo.Regions");
            DropForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "User_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Rooms", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "Place_Id", "dbo.Places");
            DropForeignKey("dbo.Comments", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "AccomodationType_Id", "dbo.AccommodationTypes");
            DropForeignKey("dbo.Accommodations", "Owner_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Regions", new[] { "Country_Id" });
            DropIndex("dbo.Places", new[] { "Region_Id" });
            DropIndex("dbo.Rooms", new[] { "Accomodation_Id" });
            DropIndex("dbo.RoomReservations", new[] { "AppUser_Id" });
            DropIndex("dbo.RoomReservations", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "AppUser_Id" });
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "Accomodation_Id" });
            DropIndex("dbo.Accommodations", new[] { "AppUser_Id" });
            DropIndex("dbo.Accommodations", new[] { "Place_Id" });
            DropIndex("dbo.Accommodations", new[] { "Owner_Id" });
            DropIndex("dbo.Accommodations", new[] { "AccomodationType_Id" });
            AlterColumn("dbo.Countries", "Code", c => c.Int(nullable: false));
            AlterColumn("dbo.Regions", "Country_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Places", "Region_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Rooms", "Accomodation_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.RoomReservations", "User_Id", c => c.Int());
            AlterColumn("dbo.RoomReservations", "Timestamp", c => c.Int(nullable: false));
            AlterColumn("dbo.Comments", "User_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Comments", "Accomodation_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "AppUser_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "Place_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "AccomodationType_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "Longitude", c => c.String());
            AlterColumn("dbo.Accommodations", "Latitude", c => c.String());
            AlterColumn("dbo.Accommodations", "AvrageGrade", c => c.Int(nullable: false));
            DropColumn("dbo.RoomReservations", "AppUser_Id");
            DropColumn("dbo.Comments", "AppUser_Id");
            DropColumn("dbo.Accommodations", "Owner_Id");
            RenameColumn(table: "dbo.Accommodations", name: "AppUser_Id", newName: "User_Id");
            CreateIndex("dbo.AspNetUsers", "appUserId");
            CreateIndex("dbo.Regions", "Country_Id");
            CreateIndex("dbo.Places", "Region_Id");
            CreateIndex("dbo.Rooms", "Accomodation_Id");
            CreateIndex("dbo.RoomReservations", "User_Id");
            CreateIndex("dbo.Comments", "User_Id");
            CreateIndex("dbo.Comments", "Accomodation_Id");
            CreateIndex("dbo.Accommodations", "User_Id");
            CreateIndex("dbo.Accommodations", "Place_Id");
            CreateIndex("dbo.Accommodations", "AccomodationType_Id");
            AddForeignKey("dbo.Regions", "Country_Id", "dbo.Countries", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Places", "Region_Id", "dbo.Regions", "Id", cascadeDelete: true);
            AddForeignKey("dbo.RoomReservations", "User_Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Accommodations", "User_Id", "dbo.AppUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Comments", "User_Id", "dbo.AppUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Rooms", "Accomodation_Id", "dbo.Accommodations", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Accommodations", "Place_Id", "dbo.Places", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Comments", "Accomodation_Id", "dbo.Accommodations", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Accommodations", "AccomodationType_Id", "dbo.AccommodationTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AspNetUsers", "appUserId", "dbo.AppUsers", "Id", cascadeDelete: true);
        }
    }
}
