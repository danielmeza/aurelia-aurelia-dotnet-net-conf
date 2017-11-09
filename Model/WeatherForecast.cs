using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aureliadotnet.Model
{

    public class WeatherForecast
    {
        public WeatherForecast()
        {
            WeatherForecastID = Guid.NewGuid();
        }
        public Guid WeatherForecastID { get; set; }
        public DateTime DateFormatted { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }

        public int TemperatureF
        {
            get
            {
                return 32 + (int)(this.TemperatureC / 0.5556);
            }
        }
    }
}

