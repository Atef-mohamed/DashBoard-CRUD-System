import { Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import EditProduct from './pages/EditProduct';
import ProductCards from './pages/ProductCards';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/add' element={<AddProduct/>}/>
            <Route path='/products/:productID' element={<ProductDetails/>}/>
            <Route path='/products/edit/:productID' element={<EditProduct/>}/>
            <Route path='/products/categories' element={<ProductCards/>}/>
            <Route path='/products/categories/:productID' element={<ProductDetails/>}/>
            {/* <Route path='/product/detials/:productID' element={<ProductDetails/>}/> */}
          </Routes>
        </div>
     </div>
    </div>
  );
}

export default App;
