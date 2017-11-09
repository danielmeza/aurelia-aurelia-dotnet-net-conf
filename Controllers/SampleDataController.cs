using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using aureliadotnet.Model;

namespace aurelia_dotnet.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static List<WeatherForecast> weatherForecasts;
        static SampleDataController()
        {
            var rng = new Random();
            weatherForecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }).ToList();
        }
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {

            return weatherForecasts;
        }

        [HttpGet("{id}",Name = "GetWeatherForecast")]
        public IActionResult Get(Guid id)
        {
            var weatherForecast = weatherForecasts.FirstOrDefault(f => f.WeatherForecastID == id);
            if (weatherForecast == null)
                return NotFound();
            return Ok(weatherForecast);
        }

        [HttpPost]
        public IActionResult Post([FromBody]WeatherForecast weatherForecast)
        {
            weatherForecasts.Add(weatherForecast);
            return CreatedAtRoute("GetWeatherForecast", new { id = weatherForecast.WeatherForecastID }, weatherForecast);
        }



    }
}
