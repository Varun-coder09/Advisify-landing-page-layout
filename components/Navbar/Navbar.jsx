'use client';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">
          <img src="./assets/adilogo.svg" alt="Logo" />
          <span className="logo-text">
            <img src="./assets/logotext.svg" alt="Logo Text" />
          </span>
        </div>

        <div className="nav-links">
          <Link href="/" className="home-tab">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/foryou">For You</Link>
          <Link href="/security">Security & Trust</Link>
        </div>

        <div className="actions">
          <button className="btn-login">Advisor Login</button>
          <button className="btn-download">Download App</button>
        </div>
      </nav>
    </div>
  );
}
