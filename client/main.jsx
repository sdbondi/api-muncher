import App from './components/app.js'

Meteor.startup(() => {
  React.render(<App />, document.getElementById('main'));
});


