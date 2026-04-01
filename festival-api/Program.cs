using festival_api.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddDbContext<FestivalAppContext>();


var app = builder.Build();

app.UseCors(o => o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.MapControllers();
app.UseSwagger();
app.UseSwaggerUI();

app.Run();


