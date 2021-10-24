﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Web.Models.ViewModels.Api.Blog
{
    public class UserDataRequest
    {
        public List<string> UsersId { get; set; }
        public int Count { get; set; } = 30;
        public int Page { get; set; } = 1;
    }
}
