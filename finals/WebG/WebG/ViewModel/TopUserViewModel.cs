using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebG.Models
{
    public class TopUserViewModel
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public int Count { get; set; }

        public TimeSpan Time { get; set; }

        public string ConectionId { get; set; }

        public bool IsCurrent { get; set; }

    }
}
