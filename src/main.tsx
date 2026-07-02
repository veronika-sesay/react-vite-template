import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './main.css';
import { router } from './router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
