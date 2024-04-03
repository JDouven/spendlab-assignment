using System.ComponentModel.DataAnnotations;

namespace ClientManager.DAL;

public class Client
{
	[Key]
	public int Id { get; set; }

	public string Name { get; set; }

	public string Surname { get; set; }

	public string Email { get; set; }

	public string StreetName { get; set; }

	public string PostalCode { get; set; }

	public string HouseNumber { get; set; }

	public string City { get; set; }

	public string Country { get; set; }	
}
