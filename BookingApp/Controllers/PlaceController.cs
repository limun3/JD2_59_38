using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    public class PlaceController : ApiController
    {
        private BAContext db = new BAContext();

        [ResponseType(typeof(Place))]
        public IHttpActionResult GetPlace(int id)
        {
            Place place = db.Places.Include(u => u.Region).SingleOrDefault(u => u.Id == id);
            if (place == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(place);
            }
        }

        public IQueryable GetPlaces()
        {
            return db.Places.Include(u => u.Region);
        }

        // POST api/values
        [ResponseType(typeof(void))]
        public IHttpActionResult PostPlace(Place place)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (PlaceExists(place.Id))
            {
                return BadRequest();
            }
            try
            {
                db.Places.Add(place);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = place.Id }, place);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }


        }

        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlace(int id, Place place)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != place.Id)
            {
                return BadRequest();
            }

            db.Entry(place).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(HttpStatusCode.ExpectationFailed);
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        private bool PlaceExists(int id)
        {
            return db.Places.Count(e => e.Id == id) > 0;
        }
        [ResponseType(typeof(void))]
        public IHttpActionResult DeletePlace(int id)
        {
            Place place = db.Places.Find(id);
            if (place == null)
            {
                return BadRequest();
            }

            try
            {
                IQueryable<Accommodation> accs = db.Accommodations.Where(r => r.Place.Id == id);
                foreach (Accommodation elem in accs)
                {
                    IQueryable<Comment> comments = db.Comments.Where(r => r.Accomodation.Id == elem.Id);
                    foreach(Comment com in comments)
                    {
                        db.Comments.Remove(com);
                    }
                    db.Accommodations.Remove(elem);
                }
                db.Places.Remove(place);
                db.SaveChanges();
                return Ok(place);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(HttpStatusCode.ExpectationFailed);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
