import { createBrowserRouter } from 'react-router-dom';

import App from './pages/App';
import AddCatalogue from './pages/AddBooking';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/add-catalogue',
		element: <AddBooking />,
	},
]);