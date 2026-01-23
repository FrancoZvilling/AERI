import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SubsidiesPage from './pages/SubsidiesPage';
import TourismPage from './pages/TourismPage';
import SecretariatPage from './pages/SecretariatPage';
import InstitutionalPage from './pages/InstitutionalPage';
import HealthPage from './pages/HealthPage';
import UnionPage from './pages/UnionPage';
import CulturePage from './pages/CulturePage';
import PressPage from './pages/PressPage';
import ActsPage from './pages/ActsPage';
import WomenFamilyPage from './pages/WomenFamilyPage';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ScrollToTop from './components/utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turnos" element={<div className="min-h-screen flex items-center justify-center text-xl text-gray-500 bg-gray-50">Sistema de Turnos: Próximamente</div>} />

          {/* Nueva página dedicada a Subsidios */}
          <Route path="/subsidios" element={<SubsidiesPage />} />



          {/* Páginas Específicas de Secretarías */}
          <Route path="/secretarias/turismo" element={<TourismPage />} />
          <Route path="/secretarias/salud" element={<HealthPage />} />
          <Route path="/secretarias/woman-and-family" element={<WomenFamilyPage />} /> {/* Legacy mapping kept for safety if needed, or remove if unused. Checking standard routing.. */}
          <Route path="/secretarias/mujer-y-familia" element={<WomenFamilyPage />} />
          <Route path="/secretarias/gremial" element={<UnionPage />} />
          <Route path="/secretarias/cultura" element={<CulturePage />} />
          <Route path="/secretarias/prensa" element={<PressPage />} />
          {/* <Route path="/secretarias/actas" element={<ActsPage />} /> */}

          {/* Secretarías Genéricas */}
          <Route path="/secretarias/:slug" element={<SecretariatPage />} />

          {/* Noticias */}
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/post/:id" element={<NewsDetailPage />} />

          {/* Institucional Specific Routes */}
          <Route
            path="/institucional/comision-directiva"
            element={
              <InstitutionalPage
                title="Comisión Directiva"
                subtitle="Conocé a los miembros de nuestra conducción."
                showAuthorities={true}
              />
            }
          />
          <Route
            path="/institucional/junta-electoral"
            element={
              <InstitutionalPage
                title="Junta Electoral"
                subtitle="Información y comunicados de la Junta Electoral."
              />
            }
          />
          <Route
            path="/institucional/historia"
            element={
              <InstitutionalPage
                title="Nuestra Historia"
                subtitle="El camino recorrido para llegar a lo que somos hoy."
              />
            }
          />
          <Route
            path="/institucional/biblioteca"
            element={
              <InstitutionalPage
                title="Biblioteca Digital"
                subtitle="Documentación, convenios y legislación para descargar."
                showDocs={true}
                backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop"
              />
            }
          />

          {/* Dashboard / Login */}
          <Route path="/mi-aeri" element={<DashboardPage />} />
          <Route path="/login" element={<DashboardPage />} /> {/* Temp Redirect for demo */}
          <Route path="*" element={<div className="p-20 text-center text-gray-500">Página no encontrada (404)</div>} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
