using id_validator_api.Properties;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace IdValidator.Tests
{
    public class  IdValidatorControllerTests
    {
        [Fact]
        public void ValidateIdReturnsTrue()
        {
            //Arrange
            string id = "37709296019";
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.ValidateId(id);
            //Assert
            Assert.IsType<OkObjectResult>(actionResult);

        }

        [Fact]
        public void ValidateIdReturnsFalse()
        {
            //Arrange
            string id = "37709290000";
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.ValidateId(id);
            //Assert
            Assert.IsType<OkObjectResult>(actionResult);
        }

        [Fact]
        public void GetLogList_ShouldReturnLogData()
        {
            //Arrange
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.GetList();
            //Assert
            Assert.IsType<OkObjectResult>(actionResult);
        }

    }
}