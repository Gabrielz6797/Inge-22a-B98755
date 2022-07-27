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
    public string CocaCola { get; set; }
    public string Pepsi { get; set; }
    public string Fanta { get; set; }
    public string Sprite { get; set; }
  }
}