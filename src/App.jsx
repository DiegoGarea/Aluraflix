import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, UploadForm} from './pages';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
