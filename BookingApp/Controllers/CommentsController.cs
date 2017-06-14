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
    public class CommentController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Comments
        [HttpGet]
        [Route("Comments")]
        public IQueryable<Comment> GetComments()
        {
            return db.Comments;
        }

        // GET: api/Comments/5
        [HttpGet]
        [Route("Comments/{id1}/{id2}")]
        [ResponseType(typeof(Comment))]
        public IHttpActionResult GetComment(int id1, int id2)
        {
            Comment comment = db.Comments.Find(new { AppUserId = id1, AccommodationId = id2 });
            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment);
        }

        // PUT: api/Comments/5
        [HttpPut]
        [Authorize]
        [Route("Comments")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutComments(int id1, int id2, Comment comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id1 != comment.AppUserId || id2 != comment.AccommodationId)
            {
                return BadRequest();
            }

            db.Entry(comment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id1, id2))
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

        // POST: api/Comments
        [HttpPost]
        [Authorize]
        [Route("Comments")]
        [ResponseType(typeof(Comment))]
        public IHttpActionResult PostComment(Comment comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Comments.Add(comment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Comment" /*, Id = place.Id*/ }, comment);
        }

        // DELETE: api/Comments/5
        [HttpDelete]
        [Authorize]
        [Route("Comments/{id1}/{id2}")]
        [ResponseType(typeof(Comment))]
        public IHttpActionResult DeleteComment(int id1, int id2)
        {
            Comment comment = db.Comments.Find(new { AppUserId = id1, AccommodationId = id2 });
            if (comment == null)
            {
                return NotFound();
            }

            db.Comments.Remove(comment);
            db.SaveChanges();

            return Ok(comment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }


        private bool CommentExists(int id1, int id2)
        {
            Comment comment = db.Comments.Find(new { AppUserId = id1, AccommodationId = id2 });
            if (comment == null)
                return false;

            return true;
        }
    }
}
