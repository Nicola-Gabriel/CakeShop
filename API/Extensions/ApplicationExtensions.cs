using System.ComponentModel;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationExtensions
    {
        public static IServiceCollection AddApplicationExtensions(this IServiceCollection services,
            IConfiguration config)
            {
                services.AddDbContext<StoreContext>(opt => 
                    opt.UseSqlite((config.GetConnectionString("DefaultConnection")), b=> b.MigrationsAssembly("API")));
                
                services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
                    // services.AddControllers()
                    //             .AddJsonOptions(options => 
                    //                 options.JsonSerializerOptions.Converters.Add(new DecimalConverter();
    
                return services;
            }
    }
}