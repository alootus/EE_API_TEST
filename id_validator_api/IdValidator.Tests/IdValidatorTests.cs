using id_validator_api.Properties;
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
        public void ValidateId_Should_Return_Status_OK()
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
        public void ValidateId_Should_Return_True()
        {
            //Arrange
            string id = "37709290015";
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.ValidateId(id) as OkObjectResult;
            //Assert
            Assert.Equal(true, actionResult.Value);

        }

        [Fact]
        public void ValidateId_Should_Return_False()
        {
            //Arrange
            string id = "37709290000";
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.ValidateId(id) as OkObjectResult;
            //Assert
            Assert.Equal(false, actionResult.Value);
        }

        [Fact]
        public void Get_LogList_Should_Return_Status_OK()
        {
            //Arrange
            var controller = new IdValidatorController();
            //Act
            var actionResult = controller.GetList();
            //Assert
            Assert.IsType<OkObjectResult>(actionResult);
        }

        [Fact]
        public void Get_LogList_Is_Not_Empty()
        {
            var controller = new IdValidatorController();

            var result = controller.GetList();
            Assert.NotNull(result);
        }

    }
}