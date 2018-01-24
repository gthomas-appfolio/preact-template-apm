import React from 'react';
import { translate } from 'react-i18next';

export default translate('translations')(({ t }) => (
  <div>
    <h1>{t('home.title')}</h1>
    <p>{t('home.description')}</p>
  </div>
));
