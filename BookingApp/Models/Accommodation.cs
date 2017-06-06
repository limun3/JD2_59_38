using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Accommodation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }//ne moze, uvezano je sa drugim klasama
        public int AvrageGrade { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string ImageURL { get; set; }
        public bool Approved { get; set; }
		public User user {get; set; }
        public List<Room> Rooms { get; set; }
        public List<Comment> Comments { get; set; }
        public AccommodationType accomodationType { get; set; }
    }
}