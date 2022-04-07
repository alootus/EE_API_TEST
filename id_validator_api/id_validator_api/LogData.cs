namespace id_validator_api
{
    public class LogData
    {
        public string? PersonId { get; set; }

        public string? Message { get; set; }

        public bool Valid { get; set; }

        public DateTime LogTime { get; set; }
    }
}