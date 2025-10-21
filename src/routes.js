/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import KuraklikRaporu from "views/Raporlar/KuraklikRaporu.js";
import TarimsalRapor from "views/Raporlar/TarimsalRapor.js";

const dashboardRoutes = [
  {
    path: "/maps",
    name: "CBS",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "İSTATİSTİKLER",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    name: "RAPORLAR",
    icon: "nc-icon nc-notes",
    subRoutes: [
      {
        path: "/kuraklik-raporu",
        name: "Kuraklık Raporu",
        icon: "nc-icon nc-paper",
        component: KuraklikRaporu,
        layout: "/admin"
      },
      {
        path: "/tarimsal-rapor",
        name: "Tarımsal Rapor",
        icon: "nc-icon nc-single-copy-04",
        component: TarimsalRapor,
        layout: "/admin"
      }
    ]
  },
];

export default dashboardRoutes;
