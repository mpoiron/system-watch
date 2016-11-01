namespace SystemWatch.Models.Dto
{
    public class ProcessDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public long PagedMemorySize64 { get; set; }
    }
}
