import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";

/** RouteList component.
 *
 * RoutesList -> {Home, CompanyList, JobList, CompanyDetail}
 *
 * Component to hold the routes
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:name" element={<CompanyDetail />} />
      <Route path="/login" element={<LogInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
