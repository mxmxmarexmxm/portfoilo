import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Layout from './components/ui/layout';
import Home from './pages/Home';
import Settings from './components/Settings';
import Modal from './components/ui/Modal';
import SettingsProvider from './context/SettingsContext';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SettingsProvider>
      {openModal && (
        <Modal setIsOpen={setOpenModal}>
          <Settings
            setIsOpen={setOpenModal}
          />
        </Modal>
      )}
      <Layout>
        <Navbar openSettings={() => setOpenModal(true)} />
        <Home />
      </Layout>
    </SettingsProvider>
  );
}

export default App;
