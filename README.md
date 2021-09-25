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
  This is our dog wakl api, developed as a project of the Web Development course at BEDU. This api aims for a control system for dog's walks requests <br>
  There are three models in the code: Users, Walks, and dogs. This model represents the operation where a Owner(User) reques walks(Walk) to walkers(User) for its dogs(Dogs).<br>
  Each model has enough information to select a walker, dog, place, time, and duration of the walk for each incidence.<br>
  The API supports sesions for user to autenticate and modification of all objets.

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
Setup environment variables
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

<h3 id="POST">  3.1 POST</h3>

```
POST : https://walk-my-dog.herokuapp.com/v1/[dogs|users|walks]
```
<p align="justify"> 
To create users, dogs, or walks, make a POST request to the corresponding endpoint. <br>
Autentication is not currently needed for creating users, dogs and walks <br>
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
"password": "sting
}

```

<p align="justify"> 
As a response you will receive a jason with the username, email and tolken. This tolken is required for autentication to get information of users. 
</p>

```json
{
    "username": "xxx",
    "email": "xxx@xxx.com",
    "token": "exxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
```

<h4 id="users"> :dog: 3.1.2 Dogs</h4>

<p align="justify"> 
The dogs request must contain a name, size ("Small| Medium | Large"), optional url of a picture, descriprion of the dog, a id of the owner and a location in which the dog wil be received for the walk in order to get posted
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
As a response you will receive a jason with the following data
</p>

```json
{
    "_id": "xxxx",
    "name": "xxxx",
    "size": "xxxx",
    "pictures": "xxxx",
    "description": "xxx xxxx",
    "owner": "xxxxxxxxxxxx",
    "location": "xxxxxx",
    "createdAt": "xxxxxxxxx",
    "updatedAt": "xxxxxxxxx",
    "__v": "xx"
  }
```

<h4 id="walks"> :service_dog: 3.1.3 Walks</h4>

<p align="justify"> 
The walk request must contain a name, playtime ("1h | 2h | 3h"), an a datetime in which the dog wil be received for the walk in order to get posted.
</p>

```json
{
    "idDog": "ObjectID as a string",
    "playtime": "string",
    "datetime": "string"
}

```

<p align="justify"> 
As a response you will receive a jason with the following data
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
Autentication is needed for geting users <br>

If an ID is passed as an argument in the endponint, a specific [dog|user|walk] will be returned<br>
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
<p> autentication for GET users</p> <br>

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
Autentication is needed for modify users <br>

If an ID is required to modify an object, refer to post section for information about the elements and validation in each object. 
</p> <br>