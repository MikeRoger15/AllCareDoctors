using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.PrimaryCareControllers;

public class SpecialtyCareController : Controller
{
    public IActionResult Cardiology() => View();
    public IActionResult Dermatology() => View("/Views/CareAndServices/Dermatology.cshtml");
    public IActionResult Nutrition() => View();
    public IActionResult Podiatry() => View();
    public IActionResult BehavioralHealth() => View();
}
