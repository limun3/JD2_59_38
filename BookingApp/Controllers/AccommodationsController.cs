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
using System.Web.Http.OData;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class AccommodationController : ApiController
    {
        private BAContext db = new BAContext();

        [HttpGet]
        [Route("Accommodations")]
        [EnableQuery]
        public IQueryable<Accommodation> m1()
        {
            return db.Accommodations;
        }

        [HttpGet]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult m2(int id)
        {
            Accommodation accommodation = db.Accommodations.Find(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            return Ok(accommodation);
        }

        [HttpGet]
        [EnableQuery]
        [Route("Accommodations/CountryId/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IQueryable<Accommodation> GetAccommodationsByCountryId(int id)
        {
            IQueryable<Accommodation> queryAccommodation =
                                        from country in db.Countries
                                        join region in db.Regions on country.Id equals region.CountryId
                                        join place in db.Places on region.Id equals place.RegionId
                                        join accommodation in db.Accommodations on place.Id equals accommodation.PlaceId
                                        where country.Id == id
                                        select accommodation;

            return queryAccommodation;
        }

        [HttpGet]
        [EnableQuery]
        [Route("Accommodations/RegionId/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IQueryable<Accommodation> GetAccommodationsByRegionId(int id)
        {
            IQueryable<Accommodation> queryAccommodation =
                                        from region in db.Regions
                                        join place in db.Places on region.Id equals place.RegionId
                                        join accommodation in db.Accommodations on place.Id equals accommodation.PlaceId
                                        where region.Id == id
                                        select accommodation;

            return queryAccommodation;
        }

        [HttpGet]
        [EnableQuery]
        [Route("Accommodations/PlaceId/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IQueryable<Accommodation> GetAccommodationsByPlaceId(int id)
        {
            IQueryable<Accommodation> queryAccommodation =
                                        from place in db.Places
                                        join accommodation in db.Accommodations on place.Id equals accommodation.PlaceId
                                        where place.Id == id
                                        select accommodation;

            return queryAccommodation;
        }

        [Authorize]
        [HttpPut]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, Accommodation accommodation)
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
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Authorize]
        [HttpPost]
        [Route("Accommodations")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult PostAccommodation(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Accommodations.Add(accommodation);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Accommodation", id = accommodation.Id }, accommodation);
        }

        [Authorize]
        [HttpDelete]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult DeleteAccommodation(int id)
        {
            Accommodation accommodation = db.Accommodations.Find(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            db.Accommodations.Remove(accommodation);
            db.SaveChanges();

            return Ok(accommodation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationExists(int id)
        {
            return db.Accommodations.Count(e => e.Id == id) > 0;
        }
    }
}
