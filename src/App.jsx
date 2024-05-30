import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, UploadForm} from './pages';

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
