import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import	{ store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
			<StrictMode>
				<Layout />
			</StrictMode>
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
