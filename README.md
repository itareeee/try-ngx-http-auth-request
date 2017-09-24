# Try try-ngx-http-auth-request

This is sample implementation of token translation (from reference token to value token), using ngx_http_auth_request_module.

# Run Servers

```
$ docker-compose up
$ npm install
$ npm start
```

# Try Auth Features


```
# Request with valid ref token
$ curl -I -H 'x-reference-token:validToken' http://localhost:10081/private

# Request with invalid ref token
$ curl -I -H 'x-reference-token:hoge' http://localhost:10081/private

# Request with no ref token
$ curl -I http://localhost:10081/private

# Request with attempt to inject value token directly
$ curl -I -H 'x-value-token:sampleValueToken' http://localhost:10081/private

```
