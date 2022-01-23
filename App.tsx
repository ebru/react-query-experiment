import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import useCachedResources from './hooks/useCachedResources';
import Root from './Root';

const queryClient = new QueryClient();

const App = () => {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Root />
				</QueryClientProvider>
			</Provider>
		);
	}
};

export default App;
