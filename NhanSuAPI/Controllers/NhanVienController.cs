using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NhanSuAPI.Models;
using NhanSuAPI.IRepository;
using Newtonsoft.Json;
using MongoDB.Driver;

namespace NhanSuAPI.Controllers
{
    [Route("api/[controller]")]
    public class NhanVienController : Controller
    {
        private readonly INVRepository _NVRepository;

        public NhanVienController(INVRepository NVRepository)
        {
            _NVRepository = NVRepository;
        }

        [HttpGet]
        public Task<string> Get()
        {
            return this.GetNV();
        }

        public async Task<string> GetNV()
        {
            var nhanviens = await _NVRepository.Get();
            return JsonConvert.SerializeObject(nhanviens);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetNVById(id);
        }

        public async Task<string> GetNVById(string id)
        {
            var nhanvien = await _NVRepository.Get(id) ?? new NhanVien();
            return JsonConvert.SerializeObject(nhanvien);
        }

        [HttpPost]
        public async Task<string> Post([FromBody] NhanVien nhanvien)
        {
            return JsonConvert.SerializeObject(await _NVRepository.Add(nhanvien));
        }

        [HttpPut]
        public async Task<string> Put([FromBody] NhanVien nhanvien)
        {
            return JsonConvert.SerializeObject(await _NVRepository.Update(nhanvien));
        }

        [HttpDelete("{id}")]
        public async Task<DeleteResult> Delete(string id)
        {
            return await _NVRepository.Remove(id);
        }

    }
}
