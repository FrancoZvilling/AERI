import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
                {children}
            </main>
            <Footer />
            <FloatingContact />
        </div>
    );
};

export default Layout;
