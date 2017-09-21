
using Microsoft.Extensions.Configuration;

namespace NhanSuAPI.DbModels
{
    public class Settings
    {
        public string ConnectionString;
        public string Database;
        public IConfigurationRoot iConfigurationRoot;
    }
}
