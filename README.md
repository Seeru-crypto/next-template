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