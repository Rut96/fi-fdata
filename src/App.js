import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Routing } from './components/Routing/Routing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
