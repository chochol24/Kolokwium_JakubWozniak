using Kolokwium.Models;

namespace Kolokwium.DTOs
{
    public class KlawiaturaResponseDTO
    {
        public int id { get; init; }
        public string model { get; init; }
        public Rodzaj rodzaj { get; init; }
    }
}
