import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { Employees } from "../pages/Employees";

export const HomePage =()=>{
    const pages = [
        {
        route: "/",
        name: "Главная",
        component: Home
        },
        {
        route: "/contacts",
        name: "Контакты",
        
        component: Contacts
        },
        {
        route: "/about",
        name: "О нас",
        
        component: About
        },
        {
        route: "/employees",
        name: "Сотрудники",
        
        component: Employees
        },
        ]

    return <div>
        <Router>
            {pages.map((el)=>{
                return <Link to={el.route}>{el.name}</Link>
            })}
          {pages.map((el)=>{
            return <Route path={el.route}>
                    <el.component/>
                </Route>
          })}
      </Router>
    </div>
}