import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from './source/app';

test('<App /> contains <h1 class="header">', (t) => {
  const app = shallow(<App />);
  expect(app.find('h1.header')).to.have.length(1);
  t.pass();
});
