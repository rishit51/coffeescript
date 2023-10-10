This repo is a companion to the [You Don't Need That Library][course] course on Frontend Masters.

[![Frontend Masters](images/FrontendMastersLogo.png)][fem]

[Please click here][website] to head to the course website.

[fem]: https://www.frontendmasters.com
[website]: https://firtman.github.io/vanilla/
[course]: https://frontendmasters.com/courses/vanilla-js-apps/

Active List of elements can be modified. This is like an list from python. Nodelist on other hand cannot be modified. ES6 operations are available only on nnodelist

we can query individual elements.

# DOM API

1. Applied after code is finished running or 'the thread is released
2. Body and header are implicit by nature. DOM requires them to be loaded to render the page

3. Query selector can be used for all elements

## options of eventlistener:

1. once-only fire once
2. passive-share the thread
3.

# History API:

```js
//pushing a new URL; the second argument is unused

history.pushState(optional_state, null, "/new-url");

//to listen for changes in URL within the same page navigation

window.addEventListener("popstate", (event) => {
  let url = location.href;
});
```
