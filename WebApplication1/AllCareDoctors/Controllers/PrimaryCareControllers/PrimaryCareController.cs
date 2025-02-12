using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.PrimaryCareControllers;

public class PrimaryCareController : Controller
{
    
    public IActionResult PrimaryCare() => View("~/Views/CareAndServices/PrimaryCare/PrimaryCare.cshtml");
    public IActionResult InternalMedicine() => View("~/Views/CareAndServices/PrimaryCare/InternalCare/Internal-Medicine.cshtml");
    public IActionResult InternalDoc1() => View("~/Views/CareAndServices/PrimaryCare/InternalCare/InternalDoctor1.cshtml");
    public IActionResult InternalDoc2() => View("~/Views/CareAndServices/PrimaryCare/InternalCare/InternalDoctor2.cshtml");
    
    public IActionResult FamilyMedicine() => View("~/Views/CareAndServices/PrimaryCare/FamilyCare/Family-Medicine.cshtml");
    public IActionResult FamilyDoc1() => View("~/Views/CareAndServices/PrimaryCare/FamilyCare/FamilyDoctor1.cshtml");
    public IActionResult FamilyDoc2() => View("~/Views/CareAndServices/PrimaryCare/FamilyCare/FamilyDoctor2.cshtml");
}