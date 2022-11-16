import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { NotFound } from "./NotFound";
import { RegisterPage } from "./RegisterPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
