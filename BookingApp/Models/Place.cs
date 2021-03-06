﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Place
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Region Region { get; set; }
        [JsonIgnore]
        public List<Accommodation> Accomodations { get; set; }
        public Place() { }
    }
}