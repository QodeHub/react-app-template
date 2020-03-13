This is where all post/put/patch request go

All service files must have a postfix of `Service`. An example is `authService.js`.

The content of a service file may look like this:


```
import { Http } from "Utils";

export function login(payload) {
  return Http.post("/auth/login", payload, { cache: { clearAll: true } });
}

export function forgotten(payload) {
  return Http.post("/auth/forgotten", payload, { cache: { clearAll: true } });
}
```

A service function has only one purpose, it makes an http request and returns a promise