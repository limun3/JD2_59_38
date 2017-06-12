using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class RoomReservations
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime Timestamp { get; set; }
        public Room Room { get; set; }
        public BAIdentityUser User { get; set; }
        public RoomReservations() { }

    }
}