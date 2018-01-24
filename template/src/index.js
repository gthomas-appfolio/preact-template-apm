import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from './components/App.js';
import i18n from './i18n.js';

export default () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
