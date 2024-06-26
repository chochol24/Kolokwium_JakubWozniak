using Kolokwium.DTOs;
using Kolokwium.Models;

namespace Kolokwium.BLL
{
    public class Service : IService
    {
        readonly List<Klawiatura> klawiatury = new()
        {
            new Klawiatura{ id = 1, model = "Model1", rodzaj = Rodzaj.membranowa },
            new Klawiatura{ id = 2, model = "Model2", rodzaj = Rodzaj.mechaniczna },
            new Klawiatura{ id = 3, model = "Model3", rodzaj = Rodzaj.hybrydowa },
            new Klawiatura{ id = 4, model = "Model4", rodzaj = Rodzaj.nozycowa },
            new Klawiatura{ id = 5, model = "Model5", rodzaj = Rodzaj.optyczna },
            new Klawiatura{ id = 6, model = "Model6", rodzaj = Rodzaj.membranowa },
            new Klawiatura{ id = 7, model = "Model7", rodzaj = Rodzaj.membranowa }
        };


        public void add(KlawiaturaRequestDTO request)
        {
            Klawiatura klawiatura = new()
            {
                id = klawiatury.Max(x => x.id) + 1,
                rodzaj = request.rodzaj,
                model = request.model
            };
            klawiatury.Add(klawiatura);
        }

        public IEnumerable<KlawiaturaResponseDTO> get()
        {
            return klawiatury.Select(x => ToKlawiaturaResponseDTO(x));
        }

        public void remove(int id)
        {
            Klawiatura klawiatura = FindKlawiatura(id);
            klawiatury.Remove(klawiatura);
        }

        Klawiatura FindKlawiatura(int id)
        {
            Klawiatura klawiatura = klawiatury.Find(k => k.id == id);
            if (klawiatura == null)
                throw new Exception($"Nie znaleziono klawiatury o id = {id}");
            return klawiatura;
        }

        KlawiaturaResponseDTO ToKlawiaturaResponseDTO(Klawiatura k)
        {
            return new KlawiaturaResponseDTO { id = k.id, model = k.model, rodzaj = k.rodzaj };
        }

    }
}
