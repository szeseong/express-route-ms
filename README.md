This a sample project to demonstrate how to handle request from nodejs to other microservices by using expressjs.

Demo:
Go to folder "expressjs-router".
Run
```
npm install // install dependencies
npm start // to start express router
```

Open another terminal
Go to folder "spring-microservices/echo-service".
Run:
```
 mvn spring-boot:run // to start microservice (echo)
```

enter ``` http://localhost:8080/echo?echo=testecho ``` into browser
should see the echo (json) from spring microservice (echo)
enter ``` http://localhost:3000/microservice/echo?echo=testroute ``` into browser
should see the echo (json) from spring microservice (echo) (this means the nodejs manage to route the request to  microservice (echo))
