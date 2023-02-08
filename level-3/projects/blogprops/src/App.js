import React from 'react'
import Navbar from './components/navbar';
import Header from './components/header';
import './App.css';
import Bloglist from './components/bloglist';
import Footer from './components/footer';

export default function App() {
  return (
  <div className="App">
    <header className="App-header">
    <section>
      <Navbar />
      <Header />
    </section>
    </header>
    <Bloglist />
    <Footer />
  </div>
);
}
