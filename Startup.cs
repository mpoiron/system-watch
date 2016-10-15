using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SystemWatch.Infrastructure;

namespace SystemWatch
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Configure AutoMapper
            var mapperConfig = new MapperConfiguration(cfg => 
            { 
                cfg.AddProfile<MapperProfile>();
            });

            // Add ASP.Net services to the container
            services.AddLogging();
            services.AddMvc();

            // Add custom services to the container
            services.AddSingleton<IMapper>(mapperConfig.CreateMapper());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseStaticFiles();

            app.UseMvc(routes => {
                routes
                    .MapRoute(
                        name: "default",
                        template: "{controller}/{action}/{id?}"
                    )
                    .MapRoute(
                        name: "api",
                        template: "api/{controller}/{action}/{id?}"
                    )
                    .MapSpaFallbackRoute(
                        name: "spa-fallback",
                        defaults: new { controller = "Home", action = "Index" }
                    );
            });
        }
    }
}
