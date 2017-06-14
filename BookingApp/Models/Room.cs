using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [JsonIgnore]
        public List<RoomReservation> RoomReservations { get; set; }
        public Accommodation Accomodation { get; set; }
        public Room() { }
    }
}