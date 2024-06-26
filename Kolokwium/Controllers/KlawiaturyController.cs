using Kolokwium.BLL;
using Kolokwium.DTOs;
using Kolokwium.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kolokwium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlawiaturyController : ControllerBase
    {
        readonly IService _service;
        public KlawiaturyController(IService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<KlawiaturaResponseDTO> Get()
        {
            return _service.get();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.remove(id);
        }

        [HttpPost]
        public void Post([FromBody] KlawiaturaRequestDTO klawiatura)
        {
            _service.add(klawiatura);
        }
    }
}
