using ClientManager.Api;
using ClientManager.DAL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the ClientManagerDbContext to be injectable on both its actual type as DbContext.
builder.Services.AddDbContext<ClientManagerDbContext>();
builder.Services.AddScoped<DbContext>(provider => provider.GetRequiredService<ClientManagerDbContext>());

builder.Services.AddCors();
builder.Services.AddAutoMapper(config =>
{
	config.AddProfile(new ClientProfile());
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(cors =>
{
	cors.AllowAnyMethod();
	cors.AllowAnyHeader();
	cors.SetIsOriginAllowed(origin => true);
	cors.AllowCredentials();
});

app.MapControllers();

app.Run();