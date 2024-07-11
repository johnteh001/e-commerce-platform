import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={HomePage} exact />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
};

export default App;
