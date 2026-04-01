using festival_api.Data;
using festival_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace festival_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RegionsController(FestivalAppContext db) : ControllerBase
{

    [HttpGet]
    public ActionResult<List<User>> GetRegions()
    { 
        return Ok(db.Regions.ToList());
    }

    [HttpPost]
    public ActionResult<User> CreateUser(User user)
    {
        db.Users.Add(user);
        db.SaveChanges();

        return Created("",user);
    }
    
}