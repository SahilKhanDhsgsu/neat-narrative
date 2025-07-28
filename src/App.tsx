
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkPage from "./pages/WorkPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import WorkDetail from "./pages/WorkDetail";
import EducationDetail from "./pages/EducationDetail";
import ProjectDetail from "./pages/ProjectDetail";
import SkillDetail from "./pages/SkillDetail";
import CertificateDetail from "./pages/CertificateDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/education/:id" element={<EducationDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills/:skill" element={<SkillDetail />} />
          <Route path="/certificates/:id" element={<CertificateDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
