using System.ComponentModel.DataAnnotations;

namespace ClientManager.Api
{
    public class UpdateClientDto
    {
        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string Name { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string Surname { get; set; }


        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string Email { get; set; }


        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string StreetName { get; set; }


        [Required]
        [MinLength(2)]
        [MaxLength(24)]
        public string PostalCode { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(24)]
        public string HouseNumber { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string City { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(255)]
        public string Country { get; set; }
    }
}
