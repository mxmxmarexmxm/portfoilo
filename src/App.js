import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Layout from './components/ui/layout';
import Home from './pages/Home';
import SettingsModal from './components/ui/SettingsModal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [settings, setSettings] = useState({
    fps: 23,
    color: '#292727',
    charset: 'M',
    size: 12,
    animation: true,
  });

  return (
    <>
      {openModal && (
        <SettingsModal
          setIsOpen={setOpenModal}
          setSettings={setSettings}
          settings={settings}
        />
      )}
      <Layout settings={settings}>
        <Navbar openSettings={() => setOpenModal(true)} />
        <Home />
      </Layout>
    </>
  );
}

export default App;
