﻿using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Linq;
using System.Security.Claims;

namespace Voluntariat.Framework.Identity
{
    public class IdentityAuthorizationFilter : IAuthorizationFilter
    {
        private readonly Data.ApplicationDbContext applicationDbContext;

        public IdentityAuthorizationFilter(Data.ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (context.HttpContext.User.Identity.IsAuthenticated)
            {
                ClaimsIdentity claimsIdentity = context.HttpContext.User.Identity as ClaimsIdentity;

                Claim nameIdentifierClaim = claimsIdentity.Claims.Last(x => x.Type == ClaimTypes.NameIdentifier);
                Claim roleClaim = claimsIdentity.Claims.LastOrDefault(x => x.Type == ClaimTypes.Role);

                Identity identity = new Identity() { ID = Guid.Parse(nameIdentifierClaim.Value), Role = roleClaim?.Value ?? CustomIdentityRole.Guest };

                ApplyVolunteerData(identity);

                context.HttpContext.AddIdentity(identity);
            }
        }

        private void ApplyVolunteerData(Identity identity)
        {
            if (identity.Role == CustomIdentityRole.Volunteer || identity.Role == CustomIdentityRole.NGOAdmin)
            {
                Models.Volunteer volunteer = applicationDbContext.Volunteers.Find(identity.ID);

                if (volunteer.NGOID.HasValue)
                {
                    Models.NGO ngo = applicationDbContext.NGOs.Find(volunteer.NGOID);

                    identity.NGOID = volunteer.NGOID.Value;
                    identity.NGOName = ngo.Name;
                }
            }
        }
    }
}