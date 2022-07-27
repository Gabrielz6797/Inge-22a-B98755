using examen2_B98755_backend.Models;

namespace examen2_B98755_backend.Handlers
{
  public class SodasHandler
  {
    // name, price, quantity, image URL
    List<Tuple<string, int, int, string>> sodasData = new List<Tuple<string, int, int, string>>();

    public SodasHandler() { }

    public void InitializeVariables()
    {
      sodasData.Add(new Tuple<string, int, int, string>(
        "Coca Cola",
        10,
        500,
        ""
      ));

      sodasData.Add(new Tuple<string, int, int, string>(
        "Pepsi",
        8,
        600,
        ""
      ));

      sodasData.Add(new Tuple<string, int, int, string>(
        "Fanta",
        10,
        550,
        ""
      ));

      sodasData.Add(new Tuple<string, int, int, string>(
        "Sprite",
        15,
        725,
        ""
      ));
    }

    public List<SodaModel> GetSodaData()
    {
      List<SodaModel> sodas = new List<SodaModel>();

      foreach (Tuple<string, int, int, string> soda in sodasData)
      {
        sodas.Add(new SodaModel
        {
          name = soda.Item1,
          price = soda.Item2.ToString(),
          quantity = soda.Item3.ToString(),
          imageURL = soda.Item4
        });
      }

      return sodas;
    }
  }
}
