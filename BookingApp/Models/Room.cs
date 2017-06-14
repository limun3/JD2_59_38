using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Room
    {
        public int Id { get; set; }

        [Required]
        [Range(1, 100)]
        public int RoomNumber { get; set; }

        [Required]
        [Range(1, 10)]
        public int BedCount { get; set; }

        [MaxLength(1024)]
        public String Description { get; set; }

        [Required]
        public double PricePerNight { get; set; }

        [Required]
        [ForeignKey("Accommodation")]
        public int AccomodationId { get; set; }

        public Accommodation Accommodation { get; set; }

        public IList<RoomReservations> RoomReservations { get; set; }

    }
}