// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBqkSvlobJLAlrGSv0icNvtI8wk0CXtjKU',
    authDomain: 'haze-1a108.firebaseapp.com',
    databaseURL: 'https://haze-1a108.firebaseio.com',
    projectId: 'haze-1a108',
    storageBucket: 'haze-1a108.appspot.com',
    messagingSenderId: '860100523276'
  },
  spotify: {
    clientId: 'edcdbe9189b64d429dadc0778420d743',
    clientSecret: '53d10d36bfef46509c1417ba63ab0133',
    redirect_uri: 'http://localhost:4200/homepage'
  }
};
