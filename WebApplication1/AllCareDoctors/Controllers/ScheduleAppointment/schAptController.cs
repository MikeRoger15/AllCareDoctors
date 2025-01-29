using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers;

public class SchAptController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public SchAptController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}