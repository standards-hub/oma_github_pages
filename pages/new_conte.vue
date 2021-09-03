<template>
<div class="tier">
    <Navbar />
      <div class="container">
          <div class="contenido">
            <img class="cover" src="~static/assets/img/prueba.png">
          </div>
        <div class="col-md-12">
            <div class="card " style="min-height: 150px;">
                <h5 style="font-weight: bold;">LwM2M in ENISA's Secure Supply Chain for IoT V1.0</h5>
                <p>The uCIFI Alliance, see https://ucifi.org, collaborates with the Open Mobile Alliance </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
 import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";

export default {
  head() {
    return {
      titleTemplate: `%s`,
      title: 'OMA',
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content('index').fetch();
    return { doc }
  },
  components: { 
      Footer,
      Navbar
  }
}
</script>
<style>
.contenido img {
    height: 260px;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
}
.cover {object-fit: cover}
#div1{
  height:300px;
  width: 100%;
  background-color: #00285fd6;
  color:#ffffff;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>