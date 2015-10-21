ServiceConfiguration.configurations.remove({service: 'github'});
ServiceConfiguration.configurations.insert({
  service: 'github',
  clientId: process.env.GITHUB_CLIENT_ID || '0b7d2a0738516753ac0b',
  secret: process.env.GITHUB_SECRET || 'b05e306b112ba6c1a8ad6778dcec2589efaf5134'
});
