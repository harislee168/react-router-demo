import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
// import {About} from './components/About'
import {Navbar} from './components/Navbar'
import {OrderSummary} from './components/OrderSummary'
import {NoMatch} from './components/NoMatch'
import {Products} from './components/Products'
import {FeaturedProducts} from './components/FeaturedProducts'
import {NewProducts} from './components/NewProducts'
import {Users} from './components/Users'
import {UserDetails} from './components/UserDetails'
import {Admin} from './components/Admin'
import {Login} from './components/Login'
import {Profile} from './components/Profile'
import {AuthProvider} from './components/auth'
import { RequireAuth } from './components/RequireAuth'

function App() {
  const LazyAbout = React.lazy(() => import('./components/About'))
  return (
    <div>
      <AuthProvider>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<React.Suspense fallback='Loading ...'><LazyAbout /></React.Suspense>}></Route>
            <Route path='order-summary' element={<OrderSummary />}></Route>
            <Route path='products' element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path='featured' element={<FeaturedProducts />}></Route>
              <Route path='new' element={<NewProducts />}></Route>
            </Route>
            <Route path='users' element={<Users />}></Route>
            <Route path='users/:userId' element={<UserDetails />}></Route>
            <Route path='users/admin' element={<Admin />}></Route>
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
