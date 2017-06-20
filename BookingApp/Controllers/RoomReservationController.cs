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
    public class RoomReservationController : ApiController
    {
        private BAContext db = new BAContext();

        [HttpGet]
        [ResponseType(typeof(RoomReservation))]
        public IHttpActionResult GetRoomReservation(int id)
        {
            RoomReservation roomReservation = db.RoomReservations.Include(u => u.Room).
                Include(u => u.User).
                SingleOrDefault(u => u.Id == id);
            if (roomReservation == null)
            {
                return BadRequest();
            }

            if(id != roomReservation.Id)
            {
                return BadRequest();
            }

            return Ok(roomReservation);
        }

        [HttpGet]
        [ResponseType(typeof(RoomReservation))]
        public IQueryable GetRooms()
        {
            return db.RoomReservations;
        }


        [HttpPost]
        [ResponseType(typeof(void))]
        //[Authorize(Roles = "AppUser")]
        public IHttpActionResult PostRoomReservation(RoomReservation roomReservation)
        {
            RoomReservation rr = new RoomReservation();
            rr.Room = new Room { RoomNumber = 333 };
            rr.Id = roomReservation.Id;
            rr.User = new BAIdentityUser { Id = "User1" };

            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            if(RoomReservationExists(roomReservation.Id))
            {
                return BadRequest();
            }

            try
            {
                db.RoomReservations.Add(rr);
                db.SaveChanges();
                return Ok(rr);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(HttpStatusCode.ExpectationFailed);
            }
        }

        private bool RoomReservationExists(int id)
        {
            return db.RoomReservations.Count(e => e.Id == id) > 0;
        }

        [HttpPut]
        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult PutRoomReservation(int id, RoomReservation roomReservation)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            if(id != roomReservation.Id)
            {
                return BadRequest();
            }

            db.Entry(roomReservation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!RoomReservationExists(id))
                {
                    return NotFound();
                }
                {
                    return StatusCode(HttpStatusCode.ExpectationFailed);
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult DeleteRoomReservation(int id)
        {
            RoomReservation roomReservation = db.RoomReservations.Find(id);
            if (roomReservation == null)
            {
                return BadRequest();
            }

            try
            {
                db.RoomReservations.Remove(roomReservation);
                db.SaveChanges();
                return Ok(roomReservation);
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
