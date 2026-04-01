using festival_api.Models;
using Microsoft.EntityFrameworkCore;

namespace festival_api.Data;

public class FestivalAppContext : DbContext
{
    public DbSet<User> Users {get ;set;}
    public DbSet<Competence> Competences {get; set;}
    public DbSet<Region> Regions {get; set;}
    public DbSet<Applicant> Applicants {get; set;}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=FestivalDatabase;Username=postgres;Password=root");
    }
    
}