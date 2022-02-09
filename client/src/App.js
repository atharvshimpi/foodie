import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/Misc/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import SummaryPage from "./pages/SummaryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import SearchPage from "./pages/SearchPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <ScrollToTop />
                <Switch>
                    <Route path="/" exact render={ (props) => (
                        <LandingPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/login" exact render={ (props) => (
                        <LoginPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/register" exact render={ (props) => (
                        <RegisterPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/:area/restaurants/:details/:id" exact render={ (props) => (
                        <RestaurantDetailsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/:area/restaurants" exact render={ (props) => (
                        <RestaurantsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/cart/:restId/:id" render={ (props) => (
                        <CartPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/cart" render={ (props) => (
                        <CartPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/checkout" render={ (props) => (
                        <CheckoutPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/address" render={ (props) => (
                        <AddressPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/payment" render={ (props) => (
                        <PaymentPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/summary" render={ (props) => (
                        <SummaryPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/order/:id" render={ (props) => (
                        <OrderDetailsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/myorders" render={ (props) => (
                        <MyOrdersPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/search" render={ (props) => (
                        <SearchPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                    <Route path="/help" render={ (props) => (
                        <HelpPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                    ) } />
                </Switch>
        </Router>
    )
}

export default App;