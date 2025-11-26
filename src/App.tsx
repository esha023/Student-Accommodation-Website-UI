import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AccommodationSearch } from './components/pages/AccommodationSearch';
import { VibeMatch } from './components/pages/VibeMatch';
import { BillsSplitter } from './components/pages/BillsSplitter';
import { HouseHelp } from './components/pages/HouseHelp';
import { NearbyServices } from './components/pages/NearbyServices';
import { PropertyDetails } from './components/pages/PropertyDetails';
import { ProfileDashboard } from './components/pages/ProfileDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<AccommodationSearch />} />
          <Route path="/vibe-match" element={<VibeMatch />} />
          <Route path="/bills" element={<BillsSplitter />} />
          <Route path="/house-help" element={<HouseHelp />} />
          <Route path="/nearby" element={<NearbyServices />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/profile" element={<ProfileDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
