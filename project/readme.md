<h1 align="center"> Cook it! Recipes </h1>
<h3 align="center"> Recipe Finder Webpage </h3>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#run-server"> ➤ Run server</a></li>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#wireframes"> ➤ Wireframes</a></li>
  </ol>

<h2 id="run-sever"> :pencil: How to run the server for development</h2>

<p align="justify"> 
to install the dependencies
</p>

```
$ npm install
```

<p align="justify"> 
to deploy the server run
</p>

```
$ npm run start
```

<p align="justify"> 
the command for a clean instalation of the packages is
</p>

```
$ npm install --save-dev webpack-dev-server css-loader style-loader html-loader @babel/core @babel/preset-env babel-loader webpack webpack-cli html-webpack-plugin
```
<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

<p align="justify"> 
  This is our recipe finder project, developed as a project of the Web Development course at BEDU. The project consists of a web page of recipes extracted from an API, which shows the recipes by means of a search by words or randomly.
</p>
  
<!-- WIREFRAMES -->
<h2 id="wireframes"> :bulb: Wireframes</h2>

<p align="justify"> 
  Before starting with the code, we developed the idea and translated it into wireframes and a interactive prototype, from which we obtained the following use cases:
</p>

  <b3> <b>Case 1:</b> User user performs a search and gets results. </b3> <br><br>
    <p align="center">   
      ![case1-search](https://user-images.githubusercontent.com/82551324/128651556-f25f6fdd-8a28-42aa-b9c7-34cbf725e9bf.gif)
    </p> <br><br>
    
  <b3> <b>Case 2:</b> User performs a search and doesn't get any related results. We provide the user with two alternatives:
    <ul>
      <li>Perform a new search</li>
      <li>Get a random recipe.</li>
    </ul>
    <p align="center"> 
      ![case2-noresults](https://user-images.githubusercontent.com/82551324/128653530-dd3d0c1f-2dbc-444f-84df-5432a454a6dd.gif)
    </p> <br><br>
    
  <b3> <b>Case 3:</b> The user enters and selects Random Recipe. We show him a random recipe pulled from the API. </b3> <br><br>
    <p align="center"> 
      ![case3-random](https://user-images.githubusercontent.com/82551324/128653546-1ef56884-e125-4731-a014-c5413891fbbd.gif)
    </p> <br><br>
    
  <b3> <b>Case 4:</b> The user wants to see all recipes and selects All recipes. We show him all the recipes pulled from the API. </b3> <br><br>
    <p align="center"> 
      ![case4-allrecipes](https://user-images.githubusercontent.com/82551324/128653549-a4941147-c73a-49a5-85f6-02841fd9bdd5.gif)
    </p> <br><br>
