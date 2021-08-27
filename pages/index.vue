<template>
  <Default :title="doc.title">
     <div>
      <Navbar />
      <Footer />
     </div>
  <div class="home">
  <div class="tier" style="padding: 50px 1px;">
    <div class="container" style="margin-top: 90px;"> 
     <table style="table-layout: fixed;border: 0px solid #000;width: 1200px;">
       <tr style="border: 1px solid #ffffff00;">
         <td class="td" v-for="modules in doc.modules"><img style="font-size: 50px" src="~static/assets/img/icon/hire.png" class="imagen"/></td>      
      </tr>
      <tr style="border: 1px solid #ffffff00;">
        <td style="text-align: center;" v-for="modules in doc.modules">{{ modules.header }}</td>
      </tr>
       <tr style="border: 1px solid #ffffff00;">
        <td style="text-align: center;color: #0f426f;font-size: 15px;" v-for="modules in doc.modules">{{ modules.sub_Header }}</td>
      </tr>
      <tr style="background: white;">
        <td class="td" v-for="modules2 in doc.modules">
            <button v-if="modules2.header === 'News'" class="button5 button1 button4" v-for="item in modules2.items">
              {{ item.title }}<br>{{ item.subtitle }}
            </button>
            <button v-if="modules2.header != 'News'" class="button button4 button2" v-for="item in modules2.items">
              {{ item.title }}<br>{{ item.subtitle }}
            </button>
        </td>
      </tr>
      <tr style="background: white; ">
        <td class="td">
          <button class="button button4 button2" style="margin-top: 35px;">Available</button>
        </td>
        <td class="td">
          <button class="button button4 button3" style="margin-top: 35px;" >Coming Spring '21</button>
        </td>
      </tr>
     </table>
     <section style="background: rgb(255, 255, 255);border: 1px solid rgb(12, 12, 12);margin-top: 50px;">
       <div class="container">
          <div class="row">
            <div class="col-lg-4">
                <img class="img" src="~static/assets/img/prueba.png" style="margin-top: 10%;margin-bottom: 10%;margin-left: 3%">
            </div>
            <div class="col-lg-7" style="margin-top: 3%;">
              <h2>TITULO 2</h2>
              <p>Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
                <a class="button button1" href="">Learn More</a>
            </div>
          </div>
        </div>
     </section>

      <section style="background: rgb(255, 255, 255);border: 1px solid rgb(12, 12, 12);margin-top: 50px;">
       <div class="container">
          <div class="row">
            <div class="col-lg-8" style="margin-top: 3%;margin-left: 15%; margin-bottom: 3%">
              <h2 style="text-align: center;">TITULO 3</h2>
              <p style="text-align: center;">Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
            </div>
          </div>
        </div>
     </section>

     <section style="background: rgb(255, 255, 255);border: 1px solid rgb(12, 12, 12);margin-top: 50px;">
       <div class="container">
          <div class="row">
            <div class="col-lg-7" style="margin-top: 3%; margin-left: 3%">
              <h2>TITULO 2</h2>
              <p>Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
                <a class="button button1" href="">Learn More</a>
            </div>
             <div class="col-lg-4">
                <img class="img" src="~static/assets/img/prueba.png" style="margin-top: 10%;margin-bottom: 10%;">
            </div>
          </div>
        </div>
     </section>
    </div>
  </div>
  </div>
  </Default>
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
  .button1 {background-color: #e7e7e7; color: black; border-color: #efefef;}
  .button2 {background-color: #DAE8FC; border: 4px solid #00285f; color: rgb(120, 9, 148); }
  .button3 {background-color: #DAE8FC; border: 4px solid #00285f; color: rgb(120, 9, 148);border-style: dotted;}
  .button4 {border-radius: 12px; }
  .button5 {
    padding: 60px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 110px;
}
  .button {
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 110px;
}
.imagen{
    max-width: 50%;
    align-content: baseline;
    margin-top: 12.5px;
    margin-bottom: 2px;
    margin-left: 37px;
    margin-right: auto;
 }
table {
   width: 100%;
   border: 1px solid #000;
}
th, td {
   width: 25%;
   text-align: left;
   vertical-align: top;
   border: 1px solid #ffffff00;
}
.td{
  border: 1px solid #e8e8e800;
  padding: 3px 1px;
}
h5{
  color: rgb(120, 9, 148)
}

</style>