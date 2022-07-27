using Microsoft.AspNetCore.Mvc;
using examen2_B98755_backend.BusinessLogic;
using examen2_B98755_backend.Handlers;
using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.Controllers
{
  [Route("api/")]
  [ApiController]
  public class ChangeController : ControllerBase
  {
    [HttpGet]
    [Route("getCoins")]
    public ActionResult GetCoins()
    {
      try
      {
        var data = ChangeHandler.GetCoinsData();
        return Ok(data);
      }
      catch (Exception error)
      {
        Console.WriteLine(error);
        return BadRequest(error.Message);
      }
    }

    [HttpPost]
    [Route("updateCoins")]
    public ActionResult UpdateSodas(UsedCoinsModel usedCoins)
    {
      try
      {
        ChangeLogic.UpdateSodasQuantity(usedCoins);
        return Ok();
      }
      catch (Exception error)
      {
        Console.WriteLine(error);
        return BadRequest(error.Message);
      }
    }
  }
}
