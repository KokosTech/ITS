using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebG.Data
{
    public class SudokuContext : DbContext
    {
        public SudokuContext(DbContextOptions<SudokuContext> options) : base(options)
        {

        }

        public virtual DbSet<TopUser> TopUsers { get; set; }
    }
}
