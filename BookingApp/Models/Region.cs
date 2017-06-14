using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Region
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public List<Place> Places { get; set; }
        public Country Country { get; set; }
        public Region() { }
    }
}