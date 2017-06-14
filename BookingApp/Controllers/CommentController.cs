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
    public class CommentController : ApiController
    {

        private BAContext db = new BAContext();

        [ResponseType(typeof(Comment))]
        public IHttpActionResult GetComment(int id)
        {
            Comment comm = db.Comments.Include(u => u.Accomodation).
                Include(u => u.User).
                SingleOrDefault(u => u.Id == id);
            if (comm == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(comm);
            }
        }

        public IQueryable GetComments()
        {
            return db.Comments.Include(u => u.Accomodation).Include(u => u.User);
        }


        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult PostComment(Comment comm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (CommentExists(comm.Id))
            {
                return BadRequest();
            }
            try
            {
                db.Comments.Add(comm);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = comm.Id }, comm);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }


        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]

        public IHttpActionResult PutComment(int id, Comment comm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != comm.Id)
            {
                return BadRequest();
            }

            db.Entry(comm).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        private bool CommentExists(int id)
        {
            return db.Comments.Count(e => e.Id == id) > 0;
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult DeleteComment(int id)
        {
            Comment comm = db.Comments.Find(id);
            if (comm == null)
            {
                return BadRequest();
            }

            try
            {
                db.Comments.Remove(comm);
                db.SaveChanges();
                return Ok(comm);
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
