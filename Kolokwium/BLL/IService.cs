using Kolokwium.DTOs;

namespace Kolokwium.BLL
{
    public interface IService
    {
        IEnumerable<KlawiaturaResponseDTO> get();
        void add(KlawiaturaRequestDTO request);
        void remove(int id);
    }
}
