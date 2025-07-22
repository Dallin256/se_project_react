import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { createRoot } from 'react-dom/client';
import Main from './components/Main.jsx';
import './vendor/normalize.css';
import './blocks/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
<>
<Header/>
<Main />
<Footer/>
</>
);

