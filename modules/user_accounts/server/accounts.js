Accounts.validateNewUser((user) => {
  var email = user.services.github.email;

  userExists = !!User.find({email: email}).limit(1).count();
  if (userExists) {
    throw new Meteor.Error(403, `Email address '${email}' already exists.`)
  }

  User.insert({email: email});
  return true;
});
