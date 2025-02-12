using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.PrimaryCareControllers;

public class SpecialtyCareController : Controller
{
    public IActionResult SpecialtyCare() => View("~/Views/CareAndServices/SpecialtyCare/SpecialtyCare.cshtml");
    
    public IActionResult Cardiology() => View("~/Views/CareAndServices/SpecialtyCare/Cardiology/Cardiology.cshtml");
    public IActionResult CardDoc1() => View("~/Views/CareAndServices/SpecialtyCare/Cardiology/CardDoc1.cshtml");
    public IActionResult CardDoc2() => View("~/Views/CareAndServices/SpecialtyCare/Cardiology/CardDoc2.cshtml");
    
    public IActionResult Dermatology() => View("~/Views/CareAndServices/SpecialtyCare/Dermatology/Dermatology.cshtml");
    public IActionResult DermDoc1() => View("~/Views/CareAndServices/SpecialtyCare/Dermatology/DermDoc1.cshtml");
    public IActionResult DermDoc2() => View("~/Views/CareAndServices/SpecialtyCare/Dermatology/DermDoc2.cshtml");

    public IActionResult Nutrition() => View("~/Views/CareAndServices/SpecialtyCare/Nutrition/Nutrition.cshtml");
    public IActionResult NutrDoc1() => View("~/Views/CareAndServices/SpecialtyCare/Nutrition/NutrDoc1.cshtml/");
    public IActionResult NutrDoc2() => View("~/Views/CareAndServices/SpecialtyCare/Nutrition/NutrDoc2.cshtml");
    
    public IActionResult Podiatry() => View("~/Views/CareAndServices/SpecialtyCare/Poditary/Podiatry.cshtml");
    public IActionResult PodDoc1() => View("~/Views/CareAndServices/SpecialtyCare/Poditary/PodDoc1.cshtml");
    public IActionResult PodDoc2() => View("~/Views/CareAndServices/SpecialtyCare/Poditary/PodDoc2.cshtml");
    
    public IActionResult BehavioralHealth() => View("~/Views/CareAndServices/SpecialtyCare/Behavioral/BehavioralHealth.cshtml");
    public IActionResult BehDoc1() => View("~/Views/CareAndServices/SpecialtyCare/Behavioral/BehDoc1.cshtml");
    public IActionResult BehDoc2() => View("~/Views/CareAndServices/SpecialtyCare/Behavioral/BehDoc2.cshtml");
}