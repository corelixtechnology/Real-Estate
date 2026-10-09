import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import SellPage from './pages/SellPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AgentsPage from './pages/AgentsPage';
import CitiesPage from './pages/CitiesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import CalqPage from './pages/CalqPage';

// Modals & Interactive Floating Tools
import PropertyDetailModal from './components/PropertyDetailModal';
import ListPropertyModal from './components/ListPropertyModal';
import EmiCalculatorModal from './components/EmiCalculatorModal';
import RoiCalculatorModal from './components/RoiCalculatorModal';
import VirtualTourModal from './components/VirtualTourModal';
import PropertyCompareDrawer from './components/PropertyCompareDrawer';
import AuthModal from './components/AuthModal';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SectionNavigator from './components/SectionNavigator';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState('home');

  // Search & Filter State
  const [selectedCity, setSelectedCity] = useState('chennai');
  const [searchTab, setSearchTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [marketSegment, setMarketSegment] = useState('Commercial');
  const [propertyType, setPropertyType] = useState('Office Space');
  const [budgetRange, setBudgetRange] = useState('Any Budget');

  // Compare Tray State (up to 3 properties)
  const [compareList, setCompareList] = useState([]);

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [virtualTourProperty, setVirtualTourProperty] = useState(null);
  const [isListPropertyOpen, setIsListPropertyOpen] = useState(false);
  const [isEmiCalcOpen, setIsEmiCalcOpen] = useState(false);
  const [isRoiCalcOpen, setIsRoiCalcOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Automatically trigger Lead Details popup modal when the home screen is opened
  useEffect(() => {
    if (currentPage === 'home') {
      const timer = setTimeout(() => {
        setIsLeadModalOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // Sync hash routing on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'buy', 'rent', 'sell', 'about', 'services', 'agents', 'cities', 'careers', 'contact', 'calq'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigatePage = (pageName) => {
    setCurrentPage(pageName);
    window.location.hash = pageName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompare = (property) => {
    if (compareList.some(item => item.id === property.id)) {
      setCompareList(compareList.filter(item => item.id !== property.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 properties at a time. Please remove one first.');
        return;
      }
      setCompareList([...compareList, property]);
    }
  };

  const handleRemoveFromCompare = (id) => {
    setCompareList(compareList.filter(item => item.id !== id));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const handlePerformSearch = () => {
    if (searchTab === 'rent') {
      handleNavigatePage('rent');
    } else {
      handleNavigatePage('buy');
    }
  };

  const handleSelectCityAndSearch = (cityId) => {
    setSelectedCity(cityId);
    handleNavigatePage('buy');
  };

  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="app-container">

        {/* Regal Navbar with Page Routing & Active Tabs */}
        <Navbar
          currentPage={currentPage}
          onNavigatePage={handleNavigatePage}
          onOpenListProperty={() => handleNavigatePage('sell')}
          onOpenAuth={() => setIsAuthOpen(true)}
          compareCount={compareList.length}
        />

        {/* Dedicated Page Views */}
        <main className="hanu-main-viewport">
          {currentPage === 'home' && (
            <HomePage
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              searchTab={searchTab}
              setSearchTab={setSearchTab}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              marketSegment={marketSegment}
              setMarketSegment={setMarketSegment}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              budgetRange={budgetRange}
              setBudgetRange={setBudgetRange}
              onPerformSearch={handlePerformSearch}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenListProperty={() => handleNavigatePage('sell')}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'buy' && (
            <BuyPage
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenEmiCalc={() => setIsEmiCalcOpen(true)}
              onOpenRoiCalc={() => setIsRoiCalcOpen(true)}
              onOpenVirtualTour={(prop) => setVirtualTourProperty(prop)}
              compareList={compareList}
              onToggleCompare={handleToggleCompare}
              onNavigateHome={() => handleNavigatePage('home')}
              onOpenListProperty={() => handleNavigatePage('sell')}
            />
          )}

          {currentPage === 'rent' && (
            <RentPage
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenVirtualTour={(prop) => setVirtualTourProperty(prop)}
              compareList={compareList}
              onToggleCompare={handleToggleCompare}
              onNavigateHome={() => handleNavigatePage('home')}
              onOpenListProperty={() => handleNavigatePage('sell')}
            />
          )}

          {currentPage === 'sell' && (
            <SellPage
              onNavigateHome={() => handleNavigatePage('home')}
              onOpenEmiCalc={() => setIsEmiCalcOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigateHome={() => handleNavigatePage('home')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigateHome={() => handleNavigatePage('home')}
              onOpenListProperty={() => handleNavigatePage('sell')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'agents' && (
            <AgentsPage
              onNavigateHome={() => handleNavigatePage('home')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'cities' && (
            <CitiesPage
              onNavigateHome={() => handleNavigatePage('home')}
              onSelectCityAndSearch={handleSelectCityAndSearch}
            />
          )}

          {currentPage === 'careers' && (
            <CareersPage
              onNavigateHome={() => handleNavigatePage('home')}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onNavigateHome={() => handleNavigatePage('home')}
            />
          )}

          {currentPage === 'calq' && (
            <CalqPage
              onNavigateHome={() => handleNavigatePage('home')}
              onOpenListProperty={() => handleNavigatePage('sell')}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigatePage={handleNavigatePage}
          onOpenListProperty={() => handleNavigatePage('sell')}
          onOpenEmiCalc={() => setIsEmiCalcOpen(true)}
          onOpenRoiCalc={() => setIsRoiCalcOpen(true)}
          onSelectCity={handleSelectCityAndSearch}
        />

        {/* Section-to-Section Quick Jumper on Homepage */}
        {currentPage === 'home' && <SectionNavigator />}

        {/* Floating WhatsApp Quick Connect */}
        <FloatingWhatsApp />

        {/* Floating Property Comparison Dock & Modal */}
        <PropertyCompareDrawer
          compareList={compareList}
          onRemoveFromCompare={handleRemoveFromCompare}
          onClearCompare={handleClearCompare}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onOpenEmiCalc={() => setIsEmiCalcOpen(true)}
        />

        {/* Modals */}
        {selectedProperty && (
          <PropertyDetailModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
            onOpenEmiCalc={() => {
              setSelectedProperty(null);
              setIsEmiCalcOpen(true);
            }}
          />
        )}

        {virtualTourProperty && (
          <VirtualTourModal
            property={virtualTourProperty}
            onClose={() => setVirtualTourProperty(null)}
            onOpenSchedule={() => {
              const prop = virtualTourProperty;
              setVirtualTourProperty(null);
              setSelectedProperty(prop);
            }}
          />
        )}

        {isListPropertyOpen && (
          <ListPropertyModal onClose={() => setIsListPropertyOpen(false)} />
        )}

        {isEmiCalcOpen && (
          <EmiCalculatorModal onClose={() => setIsEmiCalcOpen(false)} />
        )}

        {isRoiCalcOpen && (
          <RoiCalculatorModal onClose={() => setIsRoiCalcOpen(false)} />
        )}

        {isAuthOpen && (
          <AuthModal onClose={() => setIsAuthOpen(false)} />
        )}

        {/* Lead Capture Popup Modal for Home Screen */}
        {isLeadModalOpen && (
          <LeadCaptureModal 
            isOpen={isLeadModalOpen} 
            onClose={() => setIsLeadModalOpen(false)} 
          />
        )}

      </div>
    </SmoothScroll>
  );
}
