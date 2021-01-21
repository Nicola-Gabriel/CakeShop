using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class SeedStoreContext
    {
        private readonly StoreContext _context;
        private readonly ILoggerFactory _logger;
        public SeedStoreContext(StoreContext context, ILoggerFactory logger)
        {
            _logger = logger;
            _context = context;
        }

        public async void SeedContext()
        {
            try
            {

                if (!_context.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/json/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var product in products)
                    {
                        _context.Products.Add(product);
                    }

                    await _context.SaveChangesAsync();
                }


            }
            catch (Exception ex)
            {
                var log = _logger.CreateLogger<SeedStoreContext>();
                log.LogError(ex.Message);
            }

        }
    }
}