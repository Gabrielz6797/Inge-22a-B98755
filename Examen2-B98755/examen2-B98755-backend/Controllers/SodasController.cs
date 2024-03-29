﻿using Microsoft.AspNetCore.Mvc;
using examen2_B98755_backend.BusinessLogic;
using examen2_B98755_backend.Handlers;
using examen2_B98755_backend.Models;

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
    [Route("buySodasAndGetChange")]
    public ActionResult BuySodasAndGetChange(int change, BoughtSodasModel boughtSodas)
    {
      try
      {
        SodasLogic.UpdateSodasQuantity(boughtSodas);
        var data = ChangeLogic.GetUsedCoins(change);
        return Ok(data);
      }
      catch (Exception error)
      {
        Console.WriteLine(error);
        return BadRequest(error.Message);
      }
    }
  }
}
