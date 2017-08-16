import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from 'source/app/header';


storiesOf('Header', module)
.add(
  'is centered',
  () => <Header>Shortstack Storybook</Header>
);
