using festival_api.Data;
using festival_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace festival_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(FestivalAppContext db) : ControllerBase
{
    [HttpPost("login")]
    public ActionResult<User> Login([FromBody] LoginRequest request)
    {
        var user = db.Users.FirstOrDefault(u =>
            u.Login == request.Login && u.Password == request.Password
        );

        if (user == null)
        {
            return Unauthorized("Неверный логин или пароль");
        }

        return Ok(user);
    }
}

public record LoginRequest(string Login, string Password);
