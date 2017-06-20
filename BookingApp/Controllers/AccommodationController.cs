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
    public class AccommodationController : ApiController
    {
        private BAContext db = new BAContext();

        [HttpGet]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult GetAccomodation(int id)
        {
            Accommodation accomodation = db.Accommodations.Include(u => u.AccomodationType).
                Include(u => u.Place).
                Include(u => u.Owner).
                SingleOrDefault(u => u.Id == id);

            if (accomodation == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(accomodation);
            }
        }
        [HttpGet]
        [ResponseType(typeof(Accommodation))]
        public IQueryable GetAccommodations()
        {
            return db.Accommodations;
            //return db.Accommodations.Include(u => u.AccomodationType).
            //    Include(u => u.Place).
            //    Include(u => u.Owner);
        }
        [HttpPost]
        [ResponseType(typeof(void))]
        //[Authorize]
        public IHttpActionResult PostAccommodation(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (AccommodationExists(accommodation.Id))
            {
                return BadRequest();
            }
            try
            {
                db.Accommodations.Add(accommodation);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = accommodation.Id }, accommodation);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
        }
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccommodation(int id, Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accommodation.Id)
            {
                return BadRequest();
            }

            db.Entry(accommodation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
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

        private bool AccommodationExists(int id)
        {
            return db.Accommodations.Count(e => e.Id == id) > 0;
        }

        [HttpDelete]
        [ResponseType(typeof(void))]
        //[Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteAccommodation(int id)
        {
            Accommodation accommodation = db.Accommodations.Find(id);
            if (accommodation == null)
            {
                return BadRequest();
            }

            try
            {
                db.Accommodations.Remove(accommodation);
                db.SaveChanges();
                return Ok(accommodation);
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
