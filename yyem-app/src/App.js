import { Container} from 'react-bootstrap';
import './css/App.css';
import Header from './components/Header';
import PresentationMessage from './components/PresentationMessge';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <Container className='app'>
      <Header/>
      <PresentationMessage/>
      <Services/>
      <Footer/>
    </Container>
  );
}

export default App;
