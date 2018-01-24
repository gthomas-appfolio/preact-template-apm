import React from 'react';
import { translate } from 'react-i18next';

export default translate('translations')(({ user, t }) => (
  <div>
    <h1>{t('profile.title', { user })}</h1>
    <p>{t('profile.description', { user })}</p>
  </div>
));
