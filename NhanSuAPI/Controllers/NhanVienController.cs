using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FistAPI.Models;
using FistAPI.IRepository;
using Newtonsoft.Json;

namespace FistAPI.Controllers
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
        public async Task<string> Delete(string id)
        {
            if (string.IsNullOrEmpty(id)) return "Invalid id !!!";
            await _NVRepository.Remove(id);
            return "";
        }

    }
}
