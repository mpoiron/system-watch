using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace SystemWatch.Controllers
{
    [Route("api/[controller]")]
    public class ProcessesApi : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Process> Get()
        {
            var processes = Process.GetProcesses();
            return processes;
        }
    }
}
