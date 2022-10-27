import { Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import  User  from './components/User'
import { GroceriesItems } from './components/GroceriesItems'
import { CosmeticsItems } from './components/CosmeticsItems'
import { OrderStatus} from './components/OrderStatus'
import { ErrorBoundary } from './components/ErrorBoundary'



function App() {
  return (
    <>
    <Navbar />
    <ErrorBoundary>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='order-status' element={<OrderStatus />} />
    <Route path="*" element={<NoMatch />} />
    <Route path='products' element={<Products />}>
      <Route path='groceries' element={<User/>} />
      <Route path='cosmetics' element={<CosmeticsItems/>} />
    </Route>
    </Routes>
    </ErrorBoundary>
    </>
  );
}

export default App;
