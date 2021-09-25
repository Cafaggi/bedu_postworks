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
  This is our dog wakl api, developed as a project of the Web Development course at BEDU. 
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
 
<h4 id="users">  3.1.1 Users</h4>

<p align="justify"> 
The users request must contain an unique username, name, lastname, password and type ("owner | walk") in order to get posted
</p>

```
{
"username": string,  
"name": string,   
"lastname": string, 
"email": string, 
"type": string
"password": "sting
}

```

<p align="justify"> 
As a response you will receive a jason with the username, email and tolken 
</p>

```
{
    "username": "xxx",
    "email": "xxx@xxx.com",
    "token": "exxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
```

<h4 id="users">  3.1.2 Dogs</h4>

<p align="justify"> 
The dogs request must contain a name, size ("Small| Medium | Large"), optional url of a picture, descriprion of the dog, a id of the owner and a location in which the dog wil be received for the walk in order to get posted
</p>

```
{
    "name": string,
    "size": string,
    "pictures": string,
    "description": string,
    "owner": ObjectID as a string,
    "location": String
}

```

<p align="justify"> 
As a response you will receive a jason with the following data
</p>

```
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
    "__v": x
  }
```

<h4 id="walks">  3.1.3 Walks</h4>

<p align="justify"> 
The walk request must contain a name, playtime ("1h | 2h | 3h"), an a datetime in which the dog wil be received for the walk in order to get posted.
</p>

```
{
    "idDog": ObjectID as a string,
    "playtime": string,
    "datetime": string
}

```

<p align="justify"> 
As a response you will receive a jason with the following data
</p>

```
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
To get users, dogs, or walks, make a POST request to the corresponding endpoint. <br>
Autentication is not currently needed for geting users, dogs and walks, but will be implemented in the future <br>

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