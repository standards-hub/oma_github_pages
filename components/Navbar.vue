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
          <a class="navbar-brand" href="/">
            <img src="~static/assets/img/icono2.png" style="max-width: 345px;margin-top: 5px;">
        </a>
      </div>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="nav navbar-nav" style="font-size: 13px;">                  
                <li><a class="page-link" href="https://cloudinformationmodel.org" target="_blank" style="color: #000">OMA Website</a></li>
                <li><NuxtLink to="/table" style="color: #000">Specifications</NuxtLink></li>
                <li><NuxtLink to="/table" style="color: #000">Supporting Material</NuxtLink></li>
                <li><NuxtLink to="/table" style="color: #000">Open Source</NuxtLink></li>
                <li><NuxtLink to="/table" style="color: #000">TestFests</NuxtLink></li>
                <li><NuxtLink to="/new" style="color: #000">New</NuxtLink></li>
                <li><NuxtLink to="/new2" style="color: #000">New2</NuxtLink></li>
                <li><NuxtLink to="/table" style="color: #000">LwM2M</NuxtLink></li>
                <li><a class="page-link" target="_blank" href="https://github.com/cloudinformationmodel"><i class="fab fa-github-alt" style="color: #000"></i></a></li>
        </ul>
    </div>
  </div>
</nav>
  </header>
</template>

