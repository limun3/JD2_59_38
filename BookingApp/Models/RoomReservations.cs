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
        public int Timestamp { get; set; }//kog tipa ovo da bude
        public AppUser User { get; set; }
        public Room Room { get; set; }
    }
}