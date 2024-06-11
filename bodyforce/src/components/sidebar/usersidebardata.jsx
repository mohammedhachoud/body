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
        title: "User Profile",
        icon: userprofile,
        link: "/profile"
    },
    {
        title: "Registration",
        icon: registration,
        link: "/addmember"
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
        title: "Logout",
        icon: logout,
        link: "/logout"
    },
]