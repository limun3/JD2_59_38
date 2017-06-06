using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int RoomNumber { get; set; }
        public int BedCount { get; set; }
        public string Description { get; set; }
        public double PricePerNight { get; set; }
        public List<RoomReservations> roomReservations { get; set; }
        public Accommodation accomodation { get; set; }
    }
}