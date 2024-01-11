<template>
  <header>
    <div class="nav-logo">Vere-ai</div>
    <a class="mob-nav">
      <span class="ham-line"></span>
      <span class="ham-line"></span>
      <span class="ham-line"></span>
    </a>
    <nav class="nav">
      <li><a href="#">About</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Benefits</a></li>
      <li><a href="#">Pricing</a></li>
      <li><v-btn block rounded="xl"  class="text-uppercase">Create a free bot</v-btn></li>
    </nav>
  </header>
</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style>
header {
  background-color: lightgrey;
  height: 50px;
  padding: 0 15px 0 15px;
}

.nav-logo {
  float: left;
  line-height: 50px;
  font-size: 18px;
}
.nav {
  list-style: none;
  float: right;
  li {
    display: inline-block;
    line-height: 50px;
    margin-right: 15px;
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.mob-nav {
  width: 30px;
  height: 30px;
  display: none;
  float: right;

  padding: 12px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  .ham-line {
    width: 100%;
    height: 4px;
    margin-bottom: 3px;
    background: black;
    display: block;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
}

.mob-nav.open span:nth-child(1) {
  opacity: 0;
  transition: 0.5s;
}
.mob-nav.open span:nth-child(2) {
  background-color: aliceblue;
  -webkit-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  -moz-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  -o-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  transform: rotate(45deg) translateX(3px) translateY(1px);
}
.mob-nav.open span:nth-child(3) {
  background-color: aliceblue;
  -webkit-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  -moz-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  -o-transform: rotate(-45deg) translateX(2px) translateY(-3px);
  transform: rotate(-45deg) translateX(2px) translateY(-3px);
}

@media (max-width: 600px) {
  .mob-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100;
  }
  .nav {
    display: none;
    width: 100%;
    li {
      width: 100%;
      text-align: center;
      margin-right: 0;
      margin: 15px 0;
      a {
        text-align: center;
        position: relative;
        color: white;
        width: 100%;
        display: block;
        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }
}
.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: brown;
  z-index: 1;
}
</style>