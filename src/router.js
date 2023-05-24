import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'components/Private/Private';
import PublicRoute from 'components/Public/Public';
// import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const FriendsPage = lazy(() => import('./pages/FriendsPage/FriendsPage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  return (
    <>
      <SharedLayout />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/notices/:category" element={<NoticesPage />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>

          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;