using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NhanSuAPI.Models
{
    public class ChucVuV2
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string MA_CV { get; set; }
        public string TEN_CV { get; set; }
        public string LUONG_CV { get; set; }
    }
}
