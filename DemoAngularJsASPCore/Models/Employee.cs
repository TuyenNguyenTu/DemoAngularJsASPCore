using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DemoAngularJsASPCore.Models
{
    public class Employee
    {
        [Key]
        public long Id { get; set; }
        [Column(TypeName ="nvarchar(50)")]
        public string Name { get; set; }
        public int Age { get; set; }
        public bool Status { get; set; }
    }
}
