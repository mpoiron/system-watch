using System.Collections.Generic;
using System.Diagnostics;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SystemWatch.Models.Dto;

namespace SystemWatch.Controllers
{
    [Route("api/[controller]")]
    public class Processes : Controller
    {
        private IMapper mapper;

        public Processes(IMapper mapper)
        {
            this.mapper = mapper;
        }

        // GET api/processes
        [HttpGet]
        public IEnumerable<ProcessDto> Index()
        {
            var processes = Process.GetProcesses();
            return mapper.Map<ProcessDto[]>(processes);
        }
    }
}
