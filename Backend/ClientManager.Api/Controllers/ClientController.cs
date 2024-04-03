using AutoMapper;
using ClientManager.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClientManager.Api.Controllers
{
    [Route("api/clients")]
    [ApiController]
    public class ClientController : ControllerBase
    {

        private readonly ClientManagerDbContext _dbContext;
        private readonly IMapper _mapper;


        public ClientController(ClientManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int page = 0, [FromQuery] int pageSize = 50)
        {
            var entities = await _dbContext.Clients
                .Skip(page * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return Ok(entities);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var entity = await _dbContext.Clients.FindAsync(id);
            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateClientDto updateClientDto)
        {
            var entity = await _dbContext.Clients.FindAsync(id);
            if (entity == null)
            {
                return NotFound();
            }

            entity = _mapper.Map(updateClientDto, entity);
            _dbContext.Update(entity);
            await _dbContext.SaveChangesAsync();

            return Ok(entity);
        }
    }
}
