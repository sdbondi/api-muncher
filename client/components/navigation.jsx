Navigation = React.createClass({
  logout(e) {
    e.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  },

  login(e) {
    e.preventDefault();
    Meteor.loginWithGithub({
      requestPermissions: ['email'],
      success: () => {
        FlowRouter.go('/');
      },
      error: (error) => {
        if (error) {
          console.log(error.reason);
        }
      }
    });
  },

  signInLinks() {
    if (!Meteor.user()) {
      return (
        <li><a className="waves-effect waves-light btn" href="#" onClick={this.login}>Login with Github</a></li>
      );
    } else {
      return (
        <li><a href="#" onClick={this.logout}>Log out</a></li>
      );
    }
  },

  render() {
    return <nav>
      <div className="nav-wrapper indigo">
        <a href="/" className="brand-logo right">Api Muncher</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          { this.signInLinks() }
        </ul>
      </div>
    </nav>;
  }
})
