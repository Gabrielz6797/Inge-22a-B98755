using Microsoft.AspNetCore.Mvc;
using Laboratorio3.Models;

namespace Laboratorio3.Controllers
{
    public class SongController : Controller
    {
        public IActionResult Index()
        {
            var song = GetSongData();
            ViewBag.MainTitle = "My favorite song";
            return View(song);
        }

        private SongModel GetSongData()
        {
            SongModel song = new SongModel();
            song.Name = "Mikazuki";
            song.Artist = "Sayuri";
            song.Genre = "J-pop";
            song.Duration = "4:21";
            song.ReleasedDate = new DateTime(2017, 05, 17);

            return song;
        }
    }
}
