using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")] //users
    public class BaseApiController : ControllerBase
    {
        
    }
}