<template>
  <header>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background: rgb(255 255 255);border: 1px solid #d0c6c6;">
  <div class="container">
      <div class="navbar-header">
          <button class="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/oma_github_pages/">
            <img src="~static/assets/img/logo1.jpg" style="max-width: 140px;margin-top: -10px;">
        </a>
      </div>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="nav navbar-nav" style="font-size: 13px;">
                <li><a href="http://www.openmobilealliance.org/" target="_blank" style="font-weight: bold;">OMA Website</a></li>
                <li><NuxtLink to="/table" style="font-weight: bold;">Specifications</NuxtLink></li>
                <li><NuxtLink to="/table" style="font-weight: bold;">Supporting Material</NuxtLink></li>
                <li><NuxtLink to="/table" style="font-weight: bold;">Open Source</NuxtLink></li>
                <li><NuxtLink to="/table" style="font-weight: bold;">TestFests</NuxtLink></li>
                <li><NuxtLink to="/new" style="font-weight: bold;">New</NuxtLink></li>
                <li><NuxtLink to="/new2" style="font-weight: bold;">New2</NuxtLink></li>
                <li><NuxtLink to="/table" style="font-weight: bold;">LwM2M</NuxtLink></li>
                <li><a class="page-link" target="_blank" href="https://github.com/cloudinformationmodel"><i class="fab fa-github-alt fa-lg"></i></a></li>
        </ul>
    </div>
  </div>
</nav>
  </header>
</template>
<style>
a:active { background: lightgrey; }
</style>

