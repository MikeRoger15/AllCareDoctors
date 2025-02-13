using Microsoft.AspNetCore.Mvc;

namespace AllCareDoctors.Controllers.AccountControllers;

public class AccountController: Controller
{
    public IActionResult Login() => View("~/Views/Account/Login.cshtml");
    public IActionResult Registration() => View("~/Views/Account/Registration.cshtml");
    public IActionResult PostLogin() => View("~/Views/PostLoginSection/PostLoginPage.cshtml");
    
}