using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.PrimaryCareControllers;

public class PrimaryCareController : Controller
{
    public IActionResult InternalMedicine() => View("~/Views/CareAndServices/Internal-Medicine.cshtml");
    public IActionResult FamilyMedicine() => View("~/Views/CareAndServices/Family-Medicine.cshtml");
}
