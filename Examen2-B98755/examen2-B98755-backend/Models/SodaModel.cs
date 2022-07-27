namespace examen2_B98755_backend.Models
{
  public class SodaModel
  {
    public string name { get; set; }
    public string price { get; set; }
    public string quantity { get; set; }
    public string imageURL { get; set; }
  }

  public class BoughtSodasModel
  {
    public string cocaCola { get; set; }
    public string pepsi { get; set; }
    public string fanta { get; set; }
    public string sprite { get; set; }
  }
}