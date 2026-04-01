namespace festival_api.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Login { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Education { get; set; } = string.Empty;
    public string Institut { get; set; } = string.Empty;

    public int RegionId { get; set; }
    public Region? Region { get; set; }
    
    public string Photo { get; set; } = string.Empty;
}