using AutoMapper;
using ClientManager.DAL;

namespace ClientManager.Api
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Client, UpdateClientDto>().ReverseMap();
        }
    }
}
