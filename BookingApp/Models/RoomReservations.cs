using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class RoomReservations
    {
        public int Id { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndData { get; set; }

        [Required]
        public DateTime TimeStamp { get; set; }

        [Required]
        [ForeignKey("AppUser")]
        public int AppUserId { get; set; }

        public AppUser AppUser { get; set; }

        [Required]
        [ForeignKey("Room")]
        public int RoomId { get; set; }

        public Room Room { get; set; }

    }
}