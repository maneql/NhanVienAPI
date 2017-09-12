using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FistAPI.Models;
using MongoDB.Driver;

namespace FistAPI.IRepository
{
    public interface INVRepository
    {
        Task<IEnumerable<NhanVien>> Get();
        Task<NhanVien> Get(string id);
        Task<NhanVien> Add(NhanVien nhanvien);
        Task<NhanVien> Update(NhanVien nhanVien);
        Task<DeleteResult> Remove(string id);
        Task<DeleteResult> RemoveAll();
    }
}
