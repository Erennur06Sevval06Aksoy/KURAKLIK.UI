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
import React, { Component, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav, Collapse } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundColor: "#1a1a1a"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/logo-orman.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="http://localhost:3000/admin/maps">
            TARIMSAL KURAKLIK
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect) {
              // Eğer alt menüler varsa açılır menü olarak göster
              if (prop.subRoutes && prop.subRoutes.length > 0) {
                const isOpen = openMenus[prop.name] || false;
                return (
                  <li key={key}>
                    <a
                      className="nav-link"
                      onClick={() => toggleMenu(prop.name)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                      <i className={`nc-icon ${isOpen ? 'nc-minimal-up' : 'nc-minimal-down'}`} style={{ float: 'right', marginTop: '5px' }} />
                    </a>
                    <Collapse in={isOpen}>
                      <div>
                        {prop.subRoutes.map((subRoute, subKey) => (
                          <NavLink
                            key={subKey}
                            to={subRoute.layout + subRoute.path}
                            className="nav-link sub-nav-link"
                            activeClassName="active"
                            style={{ paddingLeft: '30px', fontSize: '14px' }}
                          >
                            <i className={subRoute.icon} />
                            <p>{subRoute.name}</p>
                          </NavLink>
                        ))}
                      </div>
                    </Collapse>
                  </li>
                );
              }
              
              // Normal menü öğesi
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            }
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
