﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
using NhanSuAPI.Models;

namespace NhanSuAPI.DbModels
{
    public class ObjectContext
    {
        public IConfigurationRoot Configuration { get; }
        private IMongoDatabase _database = null;

        public ObjectContext(IOptions<Settings> settings)
        {
            Configuration = settings.Value.iConfigurationRoot;
            settings.Value.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
            settings.Value.Database = Configuration.GetSection("MongoConnection:Database").Value;

            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<NhanVien> NhanViens
        {
            get
            {
                return _database.GetCollection<NhanVien>("NHAN_VIEN");
            }
        }

        public IMongoCollection<ChucVu> ChucVus
        {
            get
            {
                return _database.GetCollection<ChucVu>("CHUC_VU");
            }
        }

        public IMongoCollection<ChucVuV2> ChucVuV2s
        {
            get
            {
                return _database.GetCollection<ChucVuV2>("CHUC_VU2");
            }
        }
    }
}
