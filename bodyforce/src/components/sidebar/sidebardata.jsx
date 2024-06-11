import React from "react";
import admin from '../icons/admin.svg'
import adminprofile from '../icons/adminprofile.svg'
import coaches from '../icons/coaches.svg'
import dashboared from '../icons/dashboared.svg'
import inventory from '../icons/inventory.svg'
import logout from '../icons/logout.svg'
import plan from '../icons/plan.svg'
import registration from '../icons/registration.svg'
import report from '../icons/report.svg'
import viewmembres from '../icons/viewmembres.svg'
import subscription from '../icons/subscription.svg'

export const sidebarData = [
    {
        title: "Dashboared",
        icon: dashboared,
        link: "/home"
    },
    {
        title: "Admin Profile",
        icon: adminprofile,
        link: "/adminprofile"
    },
    {
        title: "Registration",
        icon: registration,
        link: "/registration"
    },
    {
        title: "Plan",
        icon: plan,
        link: "/plan"
    },
    {
        title: "Subscription Report",
        icon: subscription,
        link: "/subscription"
    },
    {
        title: "Inventory",
        icon: inventory,
        link: "/inventory"
    },
    {
        title: "View Membres",
        icon: viewmembres,
        link: "/viewmembres"
    },
    {
        title: "Coaches",
        icon: coaches,
        link: "/coaches"
    },
    {
        title: "Report",
        icon: report,
        link: "/report"
    },
    {
        title: "Logout",
        icon: logout,
        link: "/logout"
    },
]