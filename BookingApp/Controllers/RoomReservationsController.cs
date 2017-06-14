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
    [RoutePrefix("api")]
    public class RoomReservationController : ApiController
    {
        private BAContext db = new BAContext();

        [HttpGet]
        [Route("RoomReservations")]
        public IQueryable<RoomReservations> GetRoomReservationss()
        {
            return db.RoomReservations;
        }

        [HttpGet]
        [Route("RoomReservations/{id}")]
        [ResponseType(typeof(RoomReservations))]
        public IHttpActionResult GetRoomReservation(int id)
        {
            RoomReservations roomReservation = db.RoomReservations.Find(id);
            if (roomReservation == null)
            {
                return NotFound();
            }

            return Ok(roomReservation);
        }

        [Authorize]
        [HttpPut]
        [Route("RoomReservations/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoomReservation(int id, RoomReservations roomReservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roomReservation.Id)
            {
                return BadRequest();
            }

            db.Entry(roomReservation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomReservationExists(id))
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
        [Route("RoomReservations")]
        [ResponseType(typeof(RoomReservations))]
        public IHttpActionResult PostRoomReservation(RoomReservations roomReservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RoomReservations.Add(roomReservation);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "RoomReservation", id = roomReservation.Id }, roomReservation);
        }

        [Authorize]
        [HttpDelete]
        [Route("RoomReservations/{id}")]
        [ResponseType(typeof(RoomReservations))]
        public IHttpActionResult DeleteRoomReservation(int id)
        {
            RoomReservations roomReservation = db.RoomReservations.Find(id);
            if (roomReservation == null)
            {
                return NotFound();
            }

            db.RoomReservations.Remove(roomReservation);
            db.SaveChanges();

            return Ok(roomReservation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomReservationExists(int id)
        {
            return db.RoomReservations.Count(e => e.Id == id) > 0;
        }
    }
}
