<template>
  <div id="app" class="main-container">
    <div id="nav">
      <router-link to="/" class="nav-link" style="padding-left 10px">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/academics" class="nav-link">Academics</router-link>
      <router-link to="/Projects" class="nav-link">Projects</router-link>
    </div>
    <body>
      <router-view/>
    </body>
    <footer>
      <h1 style="color: rgb(255, 255, 255)">Hello World Footer</h1>
    </footer>
  </div>
</template>

<style>

* {
    margin: 0;
}


body {
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /*min-height: 50vh;*/
    /*the above is*/
    background-color: rgb(9, 23, 90);
}

body::-webkit-scrollbar {
    display: none;
}

#app {
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(207, 204, 204);
    margin: 0;
    padding: 0;
    height: 100%;
    
}

#type {
    margin-left: 5px;
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
    color: #111;
}

@keyframes caret {
    50% {
        border-color: transparent;
    }
}

#nav {
    padding: 15px;
    text-align: left;
    background-color: rgb(17, 4, 54);
    vertical-align: middle;
    display: table;
    width: 100%;
}


#nav a {
    font-weight: bold;
    vertical-align: middle;
    color: #4d77ff;
}

#nav a:hover {
    opacity:0.8;
}

#nav a.router-link-exact-active {
    color: #1302ff;
}

.logo {
    height: 75px;
    width: 75px;
    margin-left: 10px;
    transition: transform 250ms ease-in-out;
}
.main-container {
    /*min-height: 100vh;*/
    overflow: hidden;
    display: block;
    position: relative;
    margin: 0;
}
.nav-link {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    /*border: 1px solid #000000;*/
    padding-left: 20px;
}

@media(max-width: 400px) {
    .nav-link {
        font-size: 12px;
    }
}

/*.nav-link_about {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
}*/


.nav-link:hover {
	transform: scale(1.1);
}

footer {
	background-color: rgb(0, 1, 34);
	padding: 25px;
    height: 15%;
    width: 100%;
    position:fixed;
    bottom:0;
}

.footer-text {
	font-size: 50px;
	color: #272525;
}

.logo:hover {
	opacity: 0.8;
	transform: scale(1.1);
}

.social-list__link:focus,
.social-list__link:hover {
	opacity: .8;
	outline: none;

}

.social-list__item:hover {
	transform: scale(1.1);

}

.social-list {
	list-style: none;
	display: flex;
	justify-content: center;
	margin: 2em 0;
	padding: 0;

}

.social-list__item {
	transition: transform 250ms ease-in-out;
	margin: 0 .5em;
}

.social-list__link {
	font-size: 40px;
	color: #ffbc57;
	padding: .5em;
}

.title {
    padding-top: 3vh;
    padding-bottom: 3vh;
}

</style>
