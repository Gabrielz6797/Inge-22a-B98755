using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.Handlers
{
  public class ChangeHandler
  {
    // name, price, quantity, image URL
    public static List<int> coinsValues;
    public static List<int> coinsQuantities;

    public static void InitializeVariables()
    {
      coinsValues = new List<int>();
      coinsQuantities = new List<int>();

      coinsValues.Add(1000);
      coinsValues.Add(500);
      coinsValues.Add(100);
      coinsValues.Add(50);
      coinsValues.Add(25);

      coinsQuantities.Add(0);
      coinsQuantities.Add(20);
      coinsQuantities.Add(30);
      coinsQuantities.Add(50);
      coinsQuantities.Add(25);
    }

    public static List<CoinModel> GetCoinsData()
    {
      List<CoinModel> coins = new List<CoinModel>();

      for (int i = 0; i < coinsValues.Count; i++)
      {
        coins.Add(new CoinModel
        {
          value = coinsValues[i].ToString(),
          quantity = coinsQuantities[i].ToString()
        });
      }

      return coins;
    }
  }
}
