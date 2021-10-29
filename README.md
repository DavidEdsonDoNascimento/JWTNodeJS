# Node With JWT

basic API example in NodeJS working with JWT

### install
```
npm i
```

### create database in MySQL: 
```
create database sample_node_jwt_db;
```

### run migrations:
```
npx sequelize-cli db:migrate
```

### Existing routes:

* **/heartbeat** (method: GET)
* **/sign** (method: POST, parameters: email and password)
* **/login** (GET method, basic username and password in headers)
* **/users** (GET method, bearer token in headers)