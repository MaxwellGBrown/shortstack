import register from 'ignore-styles';
import some from 'lodash/some';

// returns accessed stylesheet keys as strings of accessed key
const stylesheetMock = new Proxy({},  // stylesheet
  { get: (target, name, reciever) => (
    new Proxy({}, { // stylesheet.target
      get: (target, name, reciever) => name
    })
  )}
);

register(undefined, (module, filename) => {
  // handle .scss & .css style imports
  if (some(['.scss', '.css'], (ext) => filename.endsWith(ext))) {
    module.exports = stylesheetMock;
  }
});
