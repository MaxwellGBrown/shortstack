import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../source/app/header';

test('<Header /> contains <h1 class="header">', (t) => {
  const app = shallow(<Header>Test</Header>);

  expect(app.find('h1.header')).to.have.length(1);
  t.pass();
});
