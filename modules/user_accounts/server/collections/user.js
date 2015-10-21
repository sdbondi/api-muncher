User = new Meteor.Collection('user');
User._ensureIndex({email: 1}, {unique: 1});
