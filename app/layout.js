import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PolyfillInit from '../components/PolyfillInit/PolyfillInit';

export const metadata = {
  title: 'My Next App',
  description: 'A simple Next.js site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PolyfillInit /> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
