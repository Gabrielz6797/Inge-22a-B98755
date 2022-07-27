using examen2_B98755_backend.Handlers;
using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.BusinessLogic
{
  public class ChangeLogic
  {
    public static UsedCoins GetUsedCoins(int change)
    {
      int fiveHundredCoinsUsed = 0;
      int oneHundredCoinsUsed = 0;
      int fiftyCoinsUsed = 0;
      int twentyFiveCoinsUsed = 0;

      // ChangeHandler List: [1] = 500, [2] = 100, [3] = 50, [4] = 25
      while (change >= ChangeHandler.coinsValues[1] && ChangeHandler.coinsQuantities[1] > 0)
      {
        ChangeHandler.coinsQuantities[1] = ChangeHandler.coinsQuantities[1] - 1;
        fiveHundredCoinsUsed = fiveHundredCoinsUsed + 1;
        change = change - ChangeHandler.coinsValues[1];
      }

      while (change >= ChangeHandler.coinsValues[2] && ChangeHandler.coinsQuantities[2] > 0)
      {
        ChangeHandler.coinsQuantities[2] = ChangeHandler.coinsQuantities[2] - 1;
        oneHundredCoinsUsed = oneHundredCoinsUsed + 1;
        change = change - ChangeHandler.coinsValues[2];
      }

      while (change >= ChangeHandler.coinsValues[3] && ChangeHandler.coinsQuantities[3] > 0)
      {
        ChangeHandler.coinsQuantities[3] = ChangeHandler.coinsQuantities[3] - 1;
        fiftyCoinsUsed = fiftyCoinsUsed + 1;
        change = change - ChangeHandler.coinsValues[3];
      }

      while (change >= ChangeHandler.coinsValues[4] && ChangeHandler.coinsQuantities[4] > 0)
      {
        ChangeHandler.coinsQuantities[4] = ChangeHandler.coinsQuantities[4] - 1;
        twentyFiveCoinsUsed = twentyFiveCoinsUsed + 1;
        change = change - ChangeHandler.coinsValues[4];
      }

      UsedCoins usedCoins = new UsedCoins
      {
        fiveHundred = "0",
        oneHundred = "0",
        fifty = "0",
        twentyFive = "0",
      };

      // if there are not enough coins to give change makes a rollback of variables
      if (change > 0)
      {
        ChangeHandler.coinsQuantities[1] = ChangeHandler.coinsQuantities[1] + fiveHundredCoinsUsed;
        ChangeHandler.coinsQuantities[2] = ChangeHandler.coinsQuantities[2] + oneHundredCoinsUsed;
        ChangeHandler.coinsQuantities[3] = ChangeHandler.coinsQuantities[3] + fiftyCoinsUsed;
        ChangeHandler.coinsQuantities[4] = ChangeHandler.coinsQuantities[4] + twentyFiveCoinsUsed;
      }
      else
      {
        usedCoins.fiveHundred = Convert.ToString(fiveHundredCoinsUsed);
        usedCoins.oneHundred = Convert.ToString(oneHundredCoinsUsed);
        usedCoins.fifty = Convert.ToString(fiftyCoinsUsed);
        usedCoins.twentyFive = Convert.ToString(twentyFiveCoinsUsed);
      }

      return usedCoins;
    }
  }
}
