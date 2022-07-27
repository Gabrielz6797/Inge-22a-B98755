using examen2_B98755_backend.Handlers;
using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.BusinessLogic
{
  public class ChangeLogic
  {
    public static void UpdateSodasQuantity(UsedCoinsModel usedCoins)
    {
      SodasHandler.sodasQuantities[0] = SodasHandler.sodasQuantities[0] - Int32.Parse(usedCoins.fiveHundred);
      SodasHandler.sodasQuantities[1] = SodasHandler.sodasQuantities[1] - Int32.Parse(usedCoins.oneHundred);
      SodasHandler.sodasQuantities[2] = SodasHandler.sodasQuantities[2] - Int32.Parse(usedCoins.fifty);
      SodasHandler.sodasQuantities[3] = SodasHandler.sodasQuantities[3] - Int32.Parse(usedCoins.twentyFive);
    }
  }
}
