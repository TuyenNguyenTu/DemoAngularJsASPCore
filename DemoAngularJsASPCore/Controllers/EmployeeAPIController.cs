using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoAngularJsASPCore.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoAngularJsASPCore.Controllers
{
    [Route("api/EmployeeAPI")]
    [ApiController]
    public class EmployeeAPIController : Controller
    {
        private readonly EmployeeDbContext context;
        public EmployeeAPIController(EmployeeDbContext _context)
        {
            context = _context;
        }
        // GET: api/<controller>
        [HttpGet]
        public JsonResult Get()
        {
            var listEmp = context.Employees.ToList();
            return Json(listEmp);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string GetById(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
