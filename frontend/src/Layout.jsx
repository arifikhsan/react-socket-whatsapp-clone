import { Outlet } from 'react-router-dom';
import FooterComponent from './shared/FooterComponent';
import HeaderComponent from './shared/HeaderComponent';

export default function Layout() {
  return (
    <div>
      <HeaderComponent />
      <div className='max-w-3xl mx-auto px-4 py-8'>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
