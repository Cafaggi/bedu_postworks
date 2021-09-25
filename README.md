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

  </ol><br>

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

<h5 id="POST">  3.1 POST</h2>

```
POST : https://walk-my-dog.herokuapp.com/v1/[dogs|users|walks]
```
<p align="justify"> 
To create users, dogs, or walks, make a POST request to the corresponding endpoint. The fields required for each model are the folowing:
</p>
 
<h5 id="users">  3.1.1 Users</h2>

<p align="justify"> 
The usrers request must contain an unique username, name, lastname, password and type ("owner | walk") in order to get posted
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

