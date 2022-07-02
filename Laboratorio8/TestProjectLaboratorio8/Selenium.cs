using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace TestProjectLaboratorio8
{
  public class Selenium
  {
    IWebDriver driver;
    [SetUp]
    public void startBrowser()
    {
      driver = new ChromeDriver();
    }

    [Test]
    public void PruebaIngresoCrearPaises()
    {
      string URL = "https://localhost:7186/";
      driver.Manage().Window.Maximize();
      driver.Url = URL;
      Assert.IsNotNull(driver);

      IWebElement element = driver.FindElement(By.LinkText("Países"));
      Assert.IsNotNull(element);
      element.Click();

      element = driver.FindElement(By.LinkText("Crear país"));
      Assert.IsNotNull(element);
      element.Click();

      element = driver.FindElement(By.Id("Nombre"));
      Assert.IsNotNull(element);
      element.SendKeys("Prueba Selenium");

      element = driver.FindElement(By.Id("Continente"));
      Assert.IsNotNull(element);
      SelectElement selectElement = new SelectElement(element);
      Assert.IsNotNull(selectElement);
      selectElement.SelectByText("Antártida");

      element = driver.FindElement(By.Id("Idioma"));
      Assert.IsNotNull(element);
      element.SendKeys("Selenium");

      element = driver.FindElement(By.CssSelector("input[type='submit']"));
      Assert.IsNotNull(element);
      element.Submit();

      Assert.IsTrue(driver.PageSource.Contains("El país Prueba Selenium fue creado con éxito"));

      element = driver.FindElement(By.LinkText("Países"));
      Assert.IsNotNull(element);
      element.Click();

      Assert.IsTrue(driver.PageSource.Contains("Prueba Selenium"));
    }
  }
}
