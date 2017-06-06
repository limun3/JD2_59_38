using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Region
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Place> Places { get; set; }
        public Country country { get; set; }
    }
}