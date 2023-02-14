import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
