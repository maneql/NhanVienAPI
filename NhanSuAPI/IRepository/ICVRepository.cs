using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NhanSuAPI.Models;
using MongoDB.Driver;

namespace NhanSuAPI.IRepository
{
    public interface ICVRepository
    {
        Task<IEnumerable<ChucVu>> Get();

        Task<ChucVu> Get(string id);

        Task<ChucVu> Add(ChucVu chucvu);

        Task<ChucVu> Update(ChucVu chucvu);

        Task<DeleteResult> Remove(string id);

        Task<DeleteResult> RemoveAll();
    }
}
