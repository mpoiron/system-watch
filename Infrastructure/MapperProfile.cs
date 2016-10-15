using AutoMapper;
using System.Diagnostics;
using SystemWatch.Models.Dto;

namespace SystemWatch.Infrastructure
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Process, ProcessDto>()
                    .ForMember(dest => dest.Name, 
                               opts => opts.MapFrom(src => src.ProcessName));
        }
    }
}
