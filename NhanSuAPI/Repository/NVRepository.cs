using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NhanSuAPI.DbModels;
using Microsoft.Extensions.Options;
using NhanSuAPI.IRepository;
using NhanSuAPI.Models;
using MongoDB.Driver;
using MongoDB.Bson;

namespace NhanSuAPI.Repository
{
    public class NVRepository : INVRepository
    {
        private readonly ObjectContext _context = null;

        public NVRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task<NhanVien> Add(NhanVien nhanvien)
        {
            await _context.NhanViens.InsertOneAsync(nhanvien);
            return nhanvien;
        }

        public async Task<IEnumerable<NhanVien>> Get()
        {
            return await _context.NhanViens.Find(x => true).ToListAsync();
        }

        public async Task<NhanVien> Get(string id)
        {
            var nhanvien = Builders<NhanVien>.Filter.Eq("Id", id);
            return await _context.NhanViens.Find(nhanvien).FirstOrDefaultAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.NhanViens.DeleteOneAsync(Builders<NhanVien>.Filter.Eq("Id", id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.NhanViens.DeleteManyAsync(new BsonDocument());
        }

        public async Task<NhanVien> Update(NhanVien nhanVien)
        {
            await _context.NhanViens.ReplaceOneAsync(zz => zz.Id == nhanVien.Id, nhanVien);
            return nhanVien;
        }
    }
}
