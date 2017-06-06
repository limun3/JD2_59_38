using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int Grade { get; set; }
        public string Text { get; set; }
        [Required]
        public AppUser User { get; set; }
        [Required]
        public Accommodation Accomodation { get; set; }
    }
}