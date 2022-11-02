using WebG.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebG.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<TopUserViewModel>> GetTop(string conectionId);

        Task AddInTop(TopUserViewModel viewModel);
    }
}

