<h1 align="center"> Walk my dog </h1>
<h3 align="center"> Walk my dog Webpage </h3>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> About The Project</a></li>
    <li><a href="#run-server"> Run server</a></li>
    <li><a href="#documentation"> Documentation</a></li>
  </ol>
  
  <br>

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil:  1. About The Project</h2>

<p align="justify"> 
This is our dog walk API, developed as a project for the Web Development course at BEDU. This API aims for a control system for dog walk requests.
<br>There are three models in the code: Users, walks, and dogs. This model represents the operation where owners(Users) request a walk(Walk) to walkers(Users) for their dogs(Dogs).<br>
Each model has enough information to select a walker, dog, place, time, and duration of the walk for each incidence.<br>
The API supports sessions for users to authenticate and to modify all objects.
</p><br>
  

<!-- RUN SEVER -->
<h2 id="run-sever"> :computer:  2. How to run the server for development</h2>

<p align="justify"> 
Install the dependencies
</p>

```
$ npm install
```

<p align="justify"> 
Set up environment variables
</p>

```
export MONGO_URI='mongodb+srv://<user>:<password>@cluster0.0qkhm.mongodb.net/<database>?retryWrites=true&w=majority'
export PORT=4001
export SECRET='secret'
export NODE_ENV='production'
```

<p align="justify"> 
To run the local server for developing
</p>

```
$ npm run dev
```

<!-- Documentation -->
<h2 id="Documentation"> :pencil:  3. Documentation</h2>

<a id="Swagger" href="https://app.swaggerhub.com/apis-docs/Cafaggi/walk-my-dog/1#/" > SWAGGER HERE <-- </a>

<h3 id="POST">  3.1 POST</h3>

```
POST : https://walk-my-dog.herokuapp.com/v1/[dogs|users|walks]
```
<p align="justify"> 
To create users, dogs, or walks, make a POST request to the corresponding endpoint. <br>
Authentication is not currently needed for creating users, dogs and walks <br>
The fields required for each model are the folowing:
</p>
 
<h4 id="users"> :adult: 3.1.1 Users</h4>

<p align="justify"> 
The users request must contain an unique username, name, lastname, password and type ("owner | walk") in order to get posted
</p>

```json
{
"username": "string",  
"name": "string",   
"lastname": "string", 
"email": "string", 
"type": "string",
"password": "string"
}

```

<p align="justify"> 
As a response you will receive a json with the username, email and token. This token is required for authentication to get information of users. 
</p>

```json
{
    "username": "xxx",
    "email": "xxx@xxx.com",
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
```

<h4 id="dogs"> :dog: 3.1.2 Dogs</h4>

<p align="justify"> 
The dogs request must contain a name, size ("Small| Medium | Large"), optional url of a picture, description of the dog, an id of the owner and a location in which the dog will be picked up for the walk in order to get posted.
</p>

```json
{
    "name": "string",
    "size": "string",
    "pictures": "string",
    "description": "string",
    "owner": "ObjectID as a string",
    "location": "string"
}

```

<p align="justify"> 
As a response you will receive a json with the following data:
</p>

```json
{
    "_id": "xxxx",
    "name": "xxxx",
    "size": "xxxx",
    "pictures": "xxxx",
    "description": "xxxxxxx",
    "owner": "xxxxxxxxxxxx",
    "location": "xxxxxx",
    "createdAt": "xxxxxxxxx",
    "updatedAt": "xxxxxxxxx",
    "__v": "xx"
  }
```

<h4 id="walks"> :service_dog: 3.1.3 Walks</h4>

<p align="justify"> 
The walk request must contain a name, playtime ("1h | 2h | 3h"), an a datetime at which the dog will be picked up for the walk in order to get posted.
</p>

```json
{
    "idDog": "ObjectID as a string",
    "playtime": "string",
    "datetime": "string",
    "walkerID": "ObjectID as a string"
}

```

<p align="justify"> 
As a response you will receive a json with the following data
</p>

```json
{
    "_id": "xxxxxxxxx",
    "idDog": "xxxxxxxxxxxxxx",
    "playtime": "xxxx",
    "datetime": "xxxxxxxx",
    "createdAt": "xxxxxxxxxxxxxxx",
    "updatedAt": "xxxxxxxxxxxxxxxxxxx",
    "__v": 0
  }
```


<h3 id="GET">  3.2 GET</h3>

```
GET : https://walk-my-dog.herokuapp.com/v1/[dogs|users|walks]
```
<p align="justify"> 
To get users, dogs, or walks, make a GET request to the corresponding endpoint. <br>
Authentication is needed for getting users information. <br>

If an ID is specified as an argument in the endpoint, the specific [dog|user|walk] whom this id belongs will be returned.<br>
Otherwise, an array of all the elements in the database will be returned. Only non-sensible data will be returned in the body of the request. 
</p> <br>

<p> Single object returned</p> <br>

```
GET : https://walk-my-dog.herokuapp.com/v1/dogs/614ed8c236d2a1849c05e589
```

<p> multiple object returned</p> <br>

```
GET : https://walk-my-dog.herokuapp.com/v1/dogs
```
<p> authentication for GET users</p> <br>

```json
{
"token" : "XXXXXXXXX",
"prefix" : "Bearer"
}
```

```
GET : https://walk-my-dog.herokuapp.com/v1/users
```

<h3 id="PUT">  3.3 PUT</h3>

```
PUT : https://walk-my-dog.herokuapp.com/v1/[dogs|users|walks]
```
<p align="justify"> 
To modify users, dogs, or walks, make a PUT request to the corresponding endpoint. <br>
Authentication is needed for modify users <br>

If an ID is required to modify an object, refer to post section for information about the elements and validation in each object. 
</p> <br>
