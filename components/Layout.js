import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, footerPosition }) {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Header />
      {children}
      <Footer position={footerPosition} />
    </div>
  );
}
