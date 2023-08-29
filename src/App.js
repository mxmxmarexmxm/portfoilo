import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Layout from './components/ui/layout';
import Settings from './components/Settings';
import Modal from './components/ui/Modal';
import SettingsProvider from './context/SettingsContext';
import Home from './pages/home';
import Work from './pages/work';
import Contact from './pages/contact';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SettingsProvider>
      {openModal && (
        <Modal setIsOpen={setOpenModal}>
          <Settings setIsOpen={setOpenModal} />
        </Modal>
      )}
      <Layout>
        <Navbar openSettings={() => setOpenModal(true)} />
        <div className="w-full h-full flex flex-col gap-16 z-10">
          <div id="home">
            <Home />
          </div>
          <div id="work">
            <Work />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </Layout>
    </SettingsProvider>
  );
}

export default App;
