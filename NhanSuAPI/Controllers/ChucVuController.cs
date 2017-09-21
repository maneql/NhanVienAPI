using Microsoft.AspNetCore.Mvc;
using NhanSuAPI.Models;
using MongoDB.Driver;
using NhanSuAPI.IRepository;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace NhanSuAPI.Controllers
{
    [Route("api/[controller]")]
    public class ChucVuController : Controller
    {
        private readonly ICVRepository _CVRepository;

        public ChucVuController(ICVRepository CVRepository)
        {
            _CVRepository = CVRepository;
        }

        [HttpGet]
        public Task<string> Get()
        {
            return this.GetCV();
        }

        public async Task<string> GetCV()
        {
            var chucvus = await _CVRepository.Get();
            return JsonConvert.SerializeObject(chucvus);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetCVById(id);
        }

        public async Task<string> GetCVById(string id)
        {
            var chucvu = await _CVRepository.Get(id) ?? new ChucVu();
            return JsonConvert.SerializeObject(chucvu);
        }

        [HttpPost]
        public async Task<string> Create([FromBody]ChucVu chucvu)
        {
            return JsonConvert.SerializeObject(await _CVRepository.Add(chucvu));
        }


        [HttpPut]
        public async Task<string> Update([FromBody]ChucVu item)
        {
            return JsonConvert.SerializeObject(await _CVRepository.Update(item));
        }


        [HttpDelete("{id}")]
        public async Task<DeleteResult> Remove(string id)
        {
            return await _CVRepository.Remove(id);
        }
    }
}
