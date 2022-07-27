using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.Handlers
{
  public class SodasHandler
  {
    // name, price, quantity, image URL
    public static List<string> sodasNames;
    public static List<int> sodasPrices;
    public static List<int> sodasQuantities;
    public static List<string> sodasImageURLs;

    public SodasHandler() { }

    public static void InitializeVariables()
    {
      sodasNames = new List<string>();
      sodasPrices = new List<int>();
      sodasQuantities = new List<int>();
      sodasImageURLs = new List<string>();

      sodasNames.Add("Coca Cola");
      sodasNames.Add("Pepsi");
      sodasNames.Add("Fanta");
      sodasNames.Add("Sprite");

      sodasPrices.Add(500);
      sodasPrices.Add(600);
      sodasPrices.Add(550);
      sodasPrices.Add(725);

      sodasQuantities.Add(10);
      sodasQuantities.Add(8);
      sodasQuantities.Add(10);
      sodasQuantities.Add(15);

      sodasImageURLs.Add("");
      sodasImageURLs.Add("");
      sodasImageURLs.Add("");
      sodasImageURLs.Add("");
    }

    public static List<SodaModel> GetSodasData()
    {
      List<SodaModel> sodas = new List<SodaModel>();

      for (int i = 0; i < sodasNames.Count; i++)
      {
        sodas.Add(new SodaModel
        {
          name = sodasNames[i],
          price = sodasPrices[i].ToString(),
          quantity = sodasQuantities[i].ToString(),
          imageURL = sodasImageURLs[i]
        });
      }

      return sodas;
    }

    public static void UpdateSodasQuantity(List<int> boughtSodas)
    {
      for (int i = 0; i < sodasQuantities.Count; i++)
      {
        sodasQuantities[i] 
      }
    }
  }
}
