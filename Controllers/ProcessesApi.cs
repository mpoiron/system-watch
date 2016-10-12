using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace SystemWatch.Controllers
{
    [Route("api/[controller]")]
    public class Processes : Controller
    {
        // GET api/processes
        [HttpGet]
        public IEnumerable<Process> Index()
        {
            var processes = Process.GetProcesses();
            return processes;
        }
    }
}

