using id_validator_api.Properties;
using Xunit;

namespace IdValidator.Tests
{
    public class IdValidatorControllerTests
    {
        [Fact]
        public void Post_Id_returns_true()
        {
            //Arrange
            string id = "37709296019";
  
            var controller = new IdValidatorController();
            //Act

            //Assert
        }
    }
}