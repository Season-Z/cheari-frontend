import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './components/loading';
import MainLayout from './layout';
import CommonProvider from './providers';

function App() {
  return (
    <CommonProvider>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    </CommonProvider>
  );
}

export default App;
