<template>
  <div id="app" class="main-container" v-bind:class="picked">
    <div id="nav">
      <div class="color-palettes">
        <router-link to="/" class="nav-link" style="padding-left 10px">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/academics" class="nav-link">Academics</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/cs" class="nav-link">CS</router-link>
        <router-link to="/theme" class="nav-link">Theme</router-link>
        <h1 style="padding-left: 20px; color: var(--text-color-primary); transition: all 2s;">Choose a theme: </h1>
        <input
            v-for="color in colors"
            type="radio"
            class="input-color"
            :class="color.value"
            :value="color.value"
            :key="color.index"
            v-model="picked"
            style="margin-left: 20px;"
        />
        </div>
    </div>
    <body>
      <router-view/>
    </body>
    <footer>
      <!-- <h1 style="color: rgb(255, 255, 255)">Hello World Footer</h1> -->
      <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="mailto: bshen.324@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com/shen0000" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://codeforces.com/profile/bshen324" target="_blank"><i class="fas fa-laptop-code" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://www.facebook.com/brendan.shen.31/" target="_blank"><i class="fab fa-facebook square" aria-hidden="true"></i></a>
          </li>
      </ul>
      
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                {id: 1, value: "blue"},
                {id: 2, value: "light"},
                {id: 3, value: "dark"},
                {id: 4, value: "orange"},
            ],
            picked: "blue",
        }
    }
}
</script>

<style>

* {
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    min-height: 100vh;
    /*the above is*/
    color: var(--text-color-primary);
    background-color: var(--body);
    transition: background-color 2s, color 2s;
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
    background-color: var(--nav);
    vertical-align: middle;
    display: table;
    width: 100%;
    transition: all 2s;
}


#nav a {
    font-weight: bold;
    vertical-align: middle;
    color: var(--nav-link);
    transition: color 2s;
}

#nav a:hover {
    opacity:0.8;
}

#nav a.router-link-exact-active {
    color: var(--nav-link-exact);
}

.logo {
    height: 75px;
    width: 75px;
    margin-left: 10px;
    transition: transform 250ms ease-in-out;
}
.main-container {
    /*min-height: 100vh;*/
    overflow: show;
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
	background-color: var(--footer);
    /* padding: 3vw; */
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 15%;
    width: 100%;
    transition: all 2s;
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
	color: var(--social);
	padding: .5em;
    transition: color 2s;
}

.title {
    padding-top: 3vh;
    padding-bottom: 3vh;
}

.blue {
  --color: #081659;
  --color-secondary: #000121;
  --nav: rgb(13, 15, 133);
  --nav-link: #4db8ff;
  --nav-link-exact: #02f7ff;
  --body: #081659;
  --footer: #000121;
  --social: #57ddff;
  --border: #3a47f8;
  --button: #23a7ff;
  --button-hover: rgb(9, 6, 151);
  --button-hover-text: #2a50fa;
  background:rgb(13, 15, 133);
  --background: #dde3e7;
  --text-color-primary: rgb(255, 255, 255);
}

.light {
  --color: #112d32;
  --color-secondary: #e6dd60;
  --nav: rgb(240, 240, 175);
  --nav-link: #6d6202;
  --nav-link-exact: #e2a115;
  --body: #fffcd6;
  --footer: #fff99f;
  --social: #614002;
  --border: #ffd665;
  --button: #ece6b1;
  --button-hover: rgb(165, 161, 137);
  --button-hover-text: #f0c871;
  background:rgb(240, 240, 175);
  --background: #ECEFF1;
  --text-color-primary: #6d6202;
}
.dark {
  --color: #c2c2c2;
  --color-secondary: #000121;
  --nav: rgb(11, 11, 12);
  --body: #081659;
  --footer: #000121;
  --social: #c2c2c2;
   background: rgb(11, 11, 12);
  --background: #505050;
  --text-color-primary: white;
  
}
.orange {
  --color: #8e3d35;
  --color-secondary: #000121;
  --nav: #edc7b7;
  --body: #081659;
  --footer: #000121;
  background: #edc7b7;
  --background: #edc7b7;
  --text-color-primary: #8e3d35;
}
.color-palettes {
  display: flex;
  /* justify-content: right; */
}

input[type="radio"] {
  appearance: none;
}
.input-color {
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid white;
}

.text {
    transition: all 2s;
}

.router-link {
    justify-content: center;
}

</style>
