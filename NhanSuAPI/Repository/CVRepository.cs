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
    public class CVRepository : ICVRepository
    {
        private readonly ObjectContext _context = null;

        public CVRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task<ChucVu> Add(ChucVu chucvu)
        {
            await _context.ChucVus.InsertOneAsync(chucvu);
            return chucvu;
        }

        public async Task<IEnumerable<ChucVu>> Get()
        {
            return await _context.ChucVus.Find(x => true).ToListAsync();
        }

        public async Task<ChucVu> Get(string id)
        {
            var cv = Builders<ChucVu>.Filter.Eq("Id",id);
            return await _context.ChucVus.Find(cv).FirstOrDefaultAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.ChucVus.DeleteOneAsync(Builders<ChucVu>.Filter.Eq("Id", id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.ChucVus.DeleteManyAsync(new BsonDocument());
        }

        public async Task<ChucVu> Update(ChucVu chucvu)
        {
            await _context.ChucVus.ReplaceOneAsync( zz => zz.Id == chucvu.Id, chucvu);
            return chucvu;
        }
    }
}
