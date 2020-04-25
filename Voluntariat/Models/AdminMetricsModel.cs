﻿namespace Voluntariat.Models
{
    public class AdminMetricsModel
    {
        public int NoOfActiveVolunteers { get; set; }
        public int NoOfUnaffiliatedVolunteer { get; set; }

        public int NoOfActiveOngs { get; set; }
        public int NoOfPendingOngs { get; set; }

        public int NoOfActiveCategories { get; set; }
        public int NoOfPendingCategories { get; set; }

        public int NoOfActiveServices { get; set; }
        public int NoOfPendingServices { get; set; }

        public int NoOfActiveProjects { get; set; }
        public int NoOfActiveBeneficaries { get; set; }
    }
}
