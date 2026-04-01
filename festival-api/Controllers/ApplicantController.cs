using festival_api.Data;
using festival_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace festival_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApplicantsController(FestivalAppContext db) : ControllerBase
{

    [HttpGet]
    public ActionResult<List<Applicant>> GetApplicants()
    {
        var applicants=  db.Applicants.Include(a => a.User).Include(a => a.Competence).Include(a => a.Region).ToList();
        return Ok(applicants);
    }

    [HttpPost]
    public ActionResult<User> CreateUser(Applicant applicant)
    {
        db.Applicants.Add(applicant);
        db.SaveChanges();

        return Created("",applicant);
    }
    
}