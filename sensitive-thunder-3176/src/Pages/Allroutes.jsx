import React from "react";

import { Route, Routes } from "react-router-dom";

import Blog from "./Blog";
import Bookdemo from "./Bookdemo";
import Home from "./Home/FinalHome";
import Signin from "./Signin/Signin";

import TimeSide from "./TimeSheet/TimeSide";
import TimeSheet from "./TimeSheet/TimeSheet";
import Dashboard from "./TimeSheet/Dashboard";
import Reports from "./TimeSheet/Reports";
import Computer from "./TimeSheet/Computer";
import Projects from "./TimeSheet/Projects";
import Tags from "./TimeSheet/Tags";
import Users from "./TimeSheet/Users";
import Attendance from "./TimeSheet/Attendance";
import Approvals from "./TimeSheet/Approvals";
import Clients from "./TimeSheet/Clients";
import Invoices from "./TimeSheet/Invoices";



import Footer from "../Components/Footer";

import Req from "./Signin/Req";




import Req from "./Signin/Req";
import FinalIntegration from "./Integration/FinalIntegration";
import FinalFeature from "./Feature/FinalFeature";
import CompletePricing from "./Pricing/CompletePricing";


const Allroutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/pricing" element={<CompletePricing />}></Route>
        <Route path="/integration" element={<FinalIntegration />}></Route>

        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/bookdemo" element={<Bookdemo />}></Route>
        <Route path="/blog" element={<Blog />}></Route>

        <Route
          path="/timesheet"
          element={
            <Req>
              <TimeSide />
            </Req>
          }
        ></Route>

        <Route path="/timesheet/timesheet" element={<TimeSheet />}></Route>
        <Route path="/timesheet/dashboard" element={<Dashboard />}></Route>
        <Route path="/timesheet/reports" element={<Reports />}></Route>
        <Route path="/timesheet/computertime" element={<Computer />}></Route>
        <Route path="/timesheet/projects" element={<Projects />}></Route>
        <Route path="/timesheet/tags" element={<Tags />}></Route>
        <Route path="/timesheet/users" element={<Users />}></Route>
        <Route path="/timesheet/attendance" element={<Attendance />}></Route>
        <Route path="/timesheet/approvals" element={<Approvals />}></Route>
        <Route path="/timesheet/clients" element={<Clients />}></Route>
        <Route path="/timesheet/invoices" element={<Invoices />}></Route>
      </Routes>


    </>
  );
};

export default Allroutes;
