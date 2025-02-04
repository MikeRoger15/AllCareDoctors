using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.PrimaryCareControllers;

public class PrimaryCareController : Controller
{
    
    public IActionResult PrimaryCare() => View("~/Views/CareAndServices/PrimaryCare.cshtml");
    public IActionResult InternalMedicine() => View("~/Views/CareAndServices/Internal-Medicine.cshtml");
    
    public IActionResult FamilyMedicine() => View("~/Views/CareAndServices/Family-Medicine.cshtml");
}
