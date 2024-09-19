import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Business } from "../Pages/UseCases/Business";
import { DashBoard } from "../Pages/Features/DashBoard";
import { Post } from "../Pages/Features/Post";
import { Payments } from "../Pages/Features/Payments";
import { Members } from "../Pages/Features/Members";
import { Subscription } from "../Pages/Features/Subscription";
import { Home } from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import { Communities } from "../Pages/Features/Communities";
import { Yoga } from "../Pages/LandingPage/Yoga";
import { HomeMaker } from "../Pages/UseCases/HomeMaker";
import { Wellness } from "../Pages/UseCases/Wellness";
import { Brand } from "../Pages/UseCases/Brand";
import { YogaTeacher } from "../Pages/UseCases/YogaTeacher";
import { PrivacyPolicy } from "../Pages/Help/PrivacyPolicy";
import { TermsAndCondition } from "../Pages/Help/TermsandConditions";
import { RefundPolicy } from "../Pages/Help/RefundPolicy";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/business" element={<Business />} />
          <Route path="/home-maker" element={<HomeMaker />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/teacher" element={<YogaTeacher />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/members" element={<Members />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-uses" element={<TermsAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
