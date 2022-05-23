import NavbarHeader from './componants/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from './componants/Items';
import ItemDetails from './componants/itemDetails';
import CartItems from './componants/cartItems';
import OrderSuccess from './componants/OrdePlaced';
import Footer from './componants/footer';
import './App.css';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={< Items />} />
          <Route path="/cartItems" element={< CartItems />} />
          <Route path="/itemDetails/:id" element={< ItemDetails />} />
          <Route path="/OrderPlaced" element={< OrderSuccess />} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
