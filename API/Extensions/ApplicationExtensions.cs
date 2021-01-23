using System.ComponentModel;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Infrastructure.Services;
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

                services.AddDbContext<AppUserIdentityDbContext>(x => {
                    x.UseSqlite(config.GetConnectionString("IdentityConnection"));
                });
                
                services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
                services.AddScoped<ITokenService, TokenService>();
                services.AddCors();
                    // services.AddControllers()
                    //             .AddJsonOptions(options => 
                    //                 options.JsonSerializerOptions.Converters.Add(new DecimalConverter();
    
                return services;
            }
    }
}