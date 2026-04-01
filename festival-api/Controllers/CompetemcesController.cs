using festival_api.Data;
using festival_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace festival_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompetencesController(FestivalAppContext db) : ControllerBase
{

    [HttpGet]
    public ActionResult<List<User>> GetCompetences()
    {
        var c =  db.Competences.ToList();
        return Ok(c);
    }

    // [HttpPost]
    // public ActionResult<User> CreateUser(User user)
    // {
    //     db.Users.Add(user);
    //     db.SaveChanges();

    //     return Created("",user);
    // }
    
}