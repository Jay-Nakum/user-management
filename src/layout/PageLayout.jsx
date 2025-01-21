import { Outlet } from 'react-router-dom';
import { Card } from '../components';

const PageLayout = () => {
  return (
    <div className='container-fluid vh-80 d-flex align-items-center justify-content-center p-3 overflow-hidden'>
      <Card>
        <Outlet />
      </Card>
    </div>
  );
};

export default PageLayout;
