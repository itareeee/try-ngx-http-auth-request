# Run Servers

```
$ docker-compose up
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
