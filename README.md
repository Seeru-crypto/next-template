[Next-auth](https://next-auth.js.org/getting-started/example)

[TestCafe](https://testcafe.io)

[github repo](https://github.com/Seeru-crypto/next-template)


Dom loadeer - https://stackoverflow.com/questions/68118383/next-js-loading-screen-while-the-dom-is-rendeing

ANT design - https://ant.design/components/spin

example of simple animations https://brittanychiang.com/

testing with JEST - https://nextjs.org/docs/testing#jest-and-react-testing-library

https://nextjs.org/docs/api-reference/next.config.js/rewrites

https://stackoverflow.com/questions/61024295/serve-top-level-domain-as-static-html-page-in-next-js

```HTML
<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>TT</title>
    <meta name="description" content="Description for TT" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="favicon.ico" />
    <link rel="manifest" href="manifest.webapp" />
    <link rel="stylesheet" href="content/css/loading.css" />
    <!-- jhipster-needle-add-resources-to-root - JHipster will add new resources here -->
  </head>
  <body>
    <!--[if lt IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve
        your experience.
      </p>
    <![endif]-->
    <div id="root">
      <div class="app-loading">
        <div class="lds-pacman">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="app-loading">
        <div id="jhipster-error" style="display: none">
          <!-- This content is for troubleshooting purpose and will be removed when app renders -->
          <h1>An error has occurred :-(</h1>
          <h2>Usual error causes</h2>
          <ol>
            <li>
              You started the application from an IDE and you didn't run <code style="color: red">npm start</code> or
              <code style="color: red">npm run webapp:build</code>.
            </li>
            <li>
              You had a network error while running <code style="color: red">npm install</code>. If you are behind a corporate proxy, it is
              likely that this error was caused by your proxy. Have a look at the JHipster error logs, you will probably have the cause of
              the error.
            </li>
            <li>
              You installed a Node.js version that doesn't work with JHipster: please use an LTS (long-term support) version, as it's the
              only version we support.
            </li>
          </ol>
          <h2>Building the client side code again</h2>
          <p>If you want to go fast, run <code style="color: red">./gradlew</code> to build and run everything.</p>
          <p>If you want to have more control, so you can debug your issue more easily, you should follow the following steps:</p>
          <ol>
            <li>Install npm dependencies with the command <code style="color: red">npm install</code></li>
            <li>
              Build the client with the command <code style="color: red">npm run webapp:build</code> or
              <code style="color: red">npm start</code>
            </li>
            <li>Start the server with <code style="color: red">./gradlew</code> or using your IDE</li>
          </ol>

          <h2>Getting more help</h2>

          <h3>If you have a question on how to use JHipster</h3>
          <p>
            Go to Stack Overflow with the
            <a href="http://stackoverflow.com/tags/jhipster" target="_blank" rel="noopener noreferrer">"jhipster"</a> tag.
          </p>

          <h3>If you have a bug or a feature request</h3>
          <p>
            First read our
            <a href="https://github.com/jhipster/generator-jhipster/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer"
              >contributing guidelines</a
            >.
          </p>
          <p>
            Then, fill a ticket on our
            <a href="https://github.com/jhipster/generator-jhipster/issues/new/choose" target="_blank" rel="noopener noreferrer"
              >bug tracker</a
            >, we'll be happy to resolve your issue!
          </p>

          <h3>If you want to chat with contributors and other users</h3>
          <p>
            Join our chat room on
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">Gitter.im</a>. Please note
            that this is a public chat room, and that we expect you to respect other people and write in a correct English language!
          </p>
          <!-- end of troubleshooting content -->
        </div>
      </div>
    </div>
    <noscript>
      <h1>You must enable JavaScript to view this page.</h1>
    </noscript>
    <script type="text/javascript">
      // show an error message if the app loading takes more than 4 sec
      window.onload = function () {
        setTimeout(showError, 4000);
      };
      function showError() {
        var errorElm = document.getElementById('jhipster-error');
        if (errorElm && errorElm.style) {
          errorElm.style.display = 'block';
        }
      }
    </script>
    <!-- uncomment this for adding service worker
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/service-worker.js')
            .then(function () {
              console.log('Service Worker Registered');
            });
        });
      }
    </script>
    -->
    <!-- Google Analytics: uncomment and change UA-XXXXX-X to be your site's ID.
    <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='//www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>-->
  </body>
</html>
```

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import getStore from 'app/config/store';
import setupAxiosInterceptors from 'app/config/axios-interceptor';
import { clearAuthentication } from 'app/shared/reducers/authentication';
import ErrorBoundary from 'app/shared/error/error-boundary';
import AppComponent from 'app/app';
import { loadIcons } from 'app/config/icon-loader';

const store = getStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

loadIcons();

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const render = Component =>
  root.render(
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          <Component />
        </div>
      </Provider>
    </ErrorBoundary>
  );

render(AppComponent);
```