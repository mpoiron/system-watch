using Microsoft.AspNetCore.Mvc;

namespace SystemWatch.Controllers
{
    public class Home : Controller
    {
        // GET: /
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
