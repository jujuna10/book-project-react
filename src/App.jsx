import { useState } from 'react'
import Header from './components/Header'
import NewProductContainer from './components/NewProductContainer'
import { Route, Routes, useLocation } from 'react-router-dom';
import AllProduct from './components/AllProduct';
import ChildrenBook from './components/ChildrenBook';
import SpecialBook from './components/SpecialBook';
import Footer from './components/Footer';



function App() {
  const location = useLocation()
  const [count, setCount] = useState(0);

  return (
    <div>
      
          {/* <Header />
          <NewProductContainer /> */}
       

      <Routes>
        <Route path="/all" element={<AllProduct />} />
        <Route path="/" element={<><Header /><NewProductContainer /> <ChildrenBook /> <SpecialBook /> <Footer /> </>} />

      </Routes>
    </div>
  );
}

export default App;
