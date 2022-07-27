using examen2_B98755_backend.Handlers;
using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.BusinessLogic
{
  public class SodasLogic
  {
    public static void UpdateSodasQuantity(BoughtSodasModel boughtSodas)
    {
      SodasHandler.sodasQuantities[0] = SodasHandler.sodasQuantities[0] - Int32.Parse(boughtSodas.cocaCola);
      SodasHandler.sodasQuantities[1] = SodasHandler.sodasQuantities[1] - Int32.Parse(boughtSodas.pepsi);
      SodasHandler.sodasQuantities[2] = SodasHandler.sodasQuantities[2] - Int32.Parse(boughtSodas.fanta);
      SodasHandler.sodasQuantities[3] = SodasHandler.sodasQuantities[3] - Int32.Parse(boughtSodas.sprite);
    }
  }
}
