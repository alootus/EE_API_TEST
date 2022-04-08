using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.IO;


namespace id_validator_api.Properties
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdValidatorController : ControllerBase
    {
        

        [HttpGet]

        public ActionResult GetList()
        {
            string[] lines = System.IO.File.ReadAllLines(@"log.txt");

            Console.WriteLine(lines);

            return Ok(lines);


        }


        [HttpPost("{id}")]
        public ActionResult  ValidateId(string id)
        {
            //bool notId = false;
            string msg = "";

            try
            {

                //msg = "Soo tunnus ei vasta aasta arvule";
                // check birth year
                int year = 0;
                switch (id[0])
                {
                    case '1':
                    case '2':
                        {
  
                            year= 1800;
                            break;
                        }
                    case '3':
                    case '4':
                        {
                            year = 1900;
                            break;
                        }
                    case '5':
                    case '6':
                        {
                            year = 2000;
                            break;
                        }
                    default:
                        {
                            //return falce value
                            return BadRequest(false);
                        }
                }


                // get a date from ID and check if birthday is a valid date
                //msg = "Sünni kuupäev ja aasta ei vasta formaadile";
                string birthDate = id.Substring(5, 2) + "." +
                    id.Substring(3, 2) + "." +
                    Convert.ToString(year + Convert.ToInt32(id.Substring(1, 2)));
                //error if parse fails
                DateTime d = DateTime.Parse(birthDate);

                Console.WriteLine(d);
                // calculate the controlsum
                int controlSum= Int16.Parse(id[0].ToString()) * 1
                      + Int16.Parse(id[1].ToString()) * 2
                      + Int16.Parse(id[2].ToString()) * 3
                      + Int16.Parse(id[3].ToString()) * 4
                      + Int16.Parse(id[4].ToString()) * 5
                      + Int16.Parse(id[5].ToString()) * 6
                      + Int16.Parse(id[6].ToString()) * 7
                      + Int16.Parse(id[7].ToString()) * 8
                      + Int16.Parse(id[8].ToString()) * 9
                      + Int16.Parse(id[9].ToString()) * 1;

                int sum = controlSum % 11;

                // special case controlsum
                if (sum == 10)
                {
                    // calculate the controlsum
                    controlSum = Int16.Parse(id[0].ToString()) * 3
                      + Int16.Parse(id[1].ToString()) * 4
                      + Int16.Parse(id[2].ToString()) * 5
                      + Int16.Parse(id[3].ToString()) * 6
                      + Int16.Parse(id[4].ToString()) * 7
                      + Int16.Parse(id[5].ToString()) * 8
                      + Int16.Parse(id[6].ToString()) * 9
                      + Int16.Parse(id[7].ToString()) * 1
                      + Int16.Parse(id[8].ToString()) * 2
                      + Int16.Parse(id[9].ToString()) * 3;

                    sum = controlSum % 11;
                    sum = sum % 10;
                }
                //change error message
                if (sum != Int16.Parse(id[10].ToString()))
                {
                    msg = id + " || kontrollsumma ei klapi ||  aeg: " + DateTime.Now;
                }
                else
                {
                    msg = id + " || on valideeritud ||  aeg: " + DateTime.Now; 
                }

                //save result into file
                using StreamWriter file = new("log.txt", append: true);
                file.WriteLineAsync(msg);

                //return true value
                return Ok(sum == Int16.Parse(id[10].ToString()));

            }

            catch 
            {
                //return falce value
                return BadRequest(false);
            }
        }

    }
}
