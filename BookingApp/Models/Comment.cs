using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Comment
    {
        public int Grade { get; set; }
        public string Text { get; set; }
        public List<Comment> Comments { get; set; }
        public List<Accommodation> Accomodations { get; set; }
    }
}