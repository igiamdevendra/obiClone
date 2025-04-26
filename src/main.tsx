import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store from './app/store.ts'
import { Provider } from 'react-redux'
import setupI18n from './i18n/index.ts'

setupI18n().then(() => {
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)})
