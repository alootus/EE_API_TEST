using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace id_validator_api.Properties
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdValidatorController : ControllerBase
    {
        [HttpGet("{id}")]
        public ActionResult GetId(string id)
        {
            bool isId = true;
            bool notId = false;

            try
            {
                // check ID length
                if (id.Length != 11) return Ok(notId);

                int century = 0;

                // check birth year
                switch (id[0])
                {
                    case '1':
                    case '2':
                        {
                            century = 1800;
                            break;
                        }
                    case '3':
                    case '4':
                        {
                            century = 1900;
                            break;
                        }
                    case '5':
                    case '6':
                        {
                            century = 2000;
                            break;
                        }
                    default:
                        {
                            return Ok(notId);
                        }
                }


                // get a date from ID and check if birthday is a valid date
                string s = id.Substring(5, 2) + "." +
                    id.Substring(3, 2) + "." +
                    Convert.ToString(century + Convert.ToInt32(id.Substring(1, 2)));

                //error if parse fails

                DateTime d = DateTime.Parse(s);
                

                // calculate the controlsum
                int n = Int16.Parse(id[0].ToString()) * 1
                      + Int16.Parse(id[1].ToString()) * 2
                      + Int16.Parse(id[2].ToString()) * 3
                      + Int16.Parse(id[3].ToString()) * 4
                      + Int16.Parse(id[4].ToString()) * 5
                      + Int16.Parse(id[5].ToString()) * 6
                      + Int16.Parse(id[6].ToString()) * 7
                      + Int16.Parse(id[7].ToString()) * 8
                      + Int16.Parse(id[8].ToString()) * 9
                      + Int16.Parse(id[9].ToString()) * 1;

                int c = n % 11;

                // special case controlsum
                if (c == 10)
                {
                    // calculate the controlsum
                    n = Int16.Parse(id[0].ToString()) * 3
                      + Int16.Parse(id[1].ToString()) * 4
                      + Int16.Parse(id[2].ToString()) * 5
                      + Int16.Parse(id[3].ToString()) * 6
                      + Int16.Parse(id[4].ToString()) * 7
                      + Int16.Parse(id[5].ToString()) * 8
                      + Int16.Parse(id[6].ToString()) * 9
                      + Int16.Parse(id[7].ToString()) * 1
                      + Int16.Parse(id[8].ToString()) * 2
                      + Int16.Parse(id[9].ToString()) * 3;

                    c = n % 11;
                    c = c % 10;
                }
                return Ok(c == Int16.Parse(id[10].ToString()));

            }

            catch
            {
                return Ok(notId);
            }

        }
    }
}
