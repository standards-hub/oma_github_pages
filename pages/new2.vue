<template>
<div class="tier">
    <Navbar />
      <div class="container">
        <div class="col-md-12">
            <div class="card " style="min-height: 150px;">
                <h5 style="font-weight: bold;">LwM2M in ENISA's Secure Supply Chain for IoT V1.0</h5>
                <p>The uCIFI Alliance, see https://ucifi.org, collaborates with the Open Mobile Alliance </p>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card " style="min-height: 150px;">
                <h5 style="font-weight: bold;">LwM2M in ENISA's Secure Supply Chain for IoT V1.0</h5>
                <p>The uCIFI Alliance, see https://ucifi.org, collaborates with the Open Mobile Alliance </p>
            </div>        </div>
        <div class="col-md-12">
            <div class="card " style="min-height: 150px;">
                <h5 style="font-weight: bold;">LwM2M in ENISA's Secure Supply Chain for IoT V1.0</h5>
                <p>The uCIFI Alliance, see https://ucifi.org, collaborates with the Open Mobile Alliance </p>
            </div>        </div>
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
.container-1{
  width: 900px;
  vertical-align: middle;
  position: relative;
  margin-left: 250px;
  margin-bottom: 50px;
}
.container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
    outline:none;
    background: #ffffff;
  }
</style>