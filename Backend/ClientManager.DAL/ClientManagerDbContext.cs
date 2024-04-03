using Microsoft.EntityFrameworkCore;

namespace ClientManager.DAL;

public class ClientManagerDbContext : DbContext
{
	public DbSet<Client> Clients { get; set; }

	private const string _databasePath = "database.sqlite3";

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		// Uses the provided Sqlite database.
		optionsBuilder.UseSqlite($"Data Source={_databasePath}");
	}
}
