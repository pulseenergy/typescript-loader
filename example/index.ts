/// <reference path="typings/tsd.d.ts" />

require('./index.css');

import React = require('react/addons');
import Button = require('./Button');


React.render(
  React.createElement(Button.Button, {}),
  document.getElementById('main'));
