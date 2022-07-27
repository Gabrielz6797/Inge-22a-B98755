using Microsoft.AspNetCore.Mvc;
using examen2_B98755_backend.Models;
using examen2_B98755_backend.Handlers;

namespace examen2_B98755_backend.Controllers
{
  [Route("api/")]
  [ApiController]
  public class SodasController : ControllerBase
  {
    [HttpGet]
    [Route("getSodas")]
    public ActionResult GetSodas()
    {
      try
      {
        var data = SodasHandler.GetSodasData();
        return Ok(data);
      }
      catch (Exception error)
      {
        Console.WriteLine(error);
        return BadRequest(error.Message);
      }
    }

    [HttpPost]
    [Route("updateSodas")]
    public ActionResult UpdateSodas(List<int> boughtSodas)
    {
      try
      {
        SodasHandler.UpdateSodasQuantity(boughtSodas);
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
