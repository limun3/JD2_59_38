using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookingApp.Models;

namespace BookingApp.Controllers
{
    public class RegionController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Region
        [HttpGet]
        [ResponseType(typeof(Region))]
        public IQueryable<Region> GetRegions()
        {
            return db.Regions;
        }

        // GET: api/Region/5
        [HttpGet]
        [ResponseType(typeof(Region))]
        public IHttpActionResult GetRegion(int id)
        {
            Region region = db.Regions.Find(id);
            if (region == null)
            {
                return NotFound();
            }

            return Ok(region);
        }

        // PUT: api/Region/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegion(int id, Region region)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != region.Id)
            {
                return BadRequest();
            }

            db.Entry(region).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegionExists(id))
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

        // POST: api/Region
        [HttpPost]
        [ResponseType(typeof(Region))]
        public IHttpActionResult PostRegion(Region region)
        {
            Region reg = new Region();
            reg.Id = region.Id;
            reg.Name = region.Name;
            reg.Country = region.Country;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Regions.Add(reg);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = region.Id }, region);
        }

        // DELETE: api/Region/5
        [HttpDelete]
        [ResponseType(typeof(Region))]
        public IHttpActionResult DeleteRegion(int id)
        {
            Region region = db.Regions.Find(id);
            if (region == null)
            {
                return NotFound();
            }

            db.Regions.Remove(region);
            db.SaveChanges();

            return Ok(region);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegionExists(int id)
        {
            return db.Regions.Count(e => e.Id == id) > 0;
        }
    }
}