import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ToursPage from '@/pages/ToursPage';
import TourPage from '@/pages/TourPage';
import HotelsPage from '@/pages/HotelsPage';
import HotelPage from '@/pages/HotelPage';
import FlightsPage from '@/pages/FlightsPage';
import FlightPage from '@/pages/FlightPage';
import TaxiPage from '@/pages/TaxiPage';
import SeasonalPage from '@/pages/SeasonalPage';
import AboutPage from '@/pages/AboutPage';
import LicensePage from '@/pages/LicensePage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import FaqPage from '@/pages/FaqPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:slug" element={<TourOrSeasonal />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:slug" element={<HotelPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/flights/:slug" element={<FlightPage />} />
          <Route path="/taxi/:slug" element={<TaxiPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import { useParams, Navigate } from 'react-router-dom';
import { getTour } from '@/data/tours';
import { getSeasonalTour } from '@/data/seasonal';

function TourOrSeasonal() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/tours" replace />;
  if (getSeasonalTour(slug)) return <SeasonalPage />;
  return <TourPage />;
}

export default App;
