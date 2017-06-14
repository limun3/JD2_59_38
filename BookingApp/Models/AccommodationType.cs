using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class AccommodationType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public List<Accommodation> Accommodations { get; set; }
        public AccommodationType() { }
    }
}