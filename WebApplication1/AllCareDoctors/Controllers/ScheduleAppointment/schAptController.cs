using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.ScheduleAppointment;

public class SchAptController : Controller
{
    public IActionResult BookApptPage() => View("~/Views/BookAppointment/BookApptPage1.cshtml");
    public IActionResult Calender() => View("~/Views/BookAppointment/CalendarPage2.cshtml");
    public IActionResult ApptConfPage3() => View("~/Views/BookAppointment/ApptConfPage3.cshtml");
}