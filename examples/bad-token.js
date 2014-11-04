// Generated by CoffeeScript 1.8.0
(function() {
  var Gitlab, credentials, gitlab;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  Gitlab = require('..');

  credentials = {
    url: 'http://demo.gitlab.com',
    token: 'bad-token'
  };

  gitlab = new Gitlab({
    url: credentials.url,
    token: credentials.token
  });

  gitlab.projects.all(function(err, resp, result) {
    return console.log({
      err: err,
      resp: resp,
      result: result
    });
  });

}).call(this);
