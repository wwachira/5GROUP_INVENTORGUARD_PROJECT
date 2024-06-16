import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from '..components/NavigationBar';
import AboutUs from '..components/AboutUs';
import BookingForm from '..components/BookingForm';
import Footer from '..components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/booking-form" component={BookingForm} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;