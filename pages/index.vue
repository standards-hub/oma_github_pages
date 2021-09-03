<template>
  <Default :title="doc.title">
     <div>
      <Navbar />
      <Footer />
     </div>
  <div class="home">
  <div class="tier" style="padding: 50px 1px;">
    <div class="container" style="margin-top: 90px;width: 1357px;"> 
     <table style="table-layout: fixed;border: 0px solid #000;">
       <tr style="border: 1px solid #ffffff00;">
         <td class="td" v-for="modules in doc.modules"><img style="width: 20%;;font-size: 50px;display: block;margin-left: auto;margin-right: auto;" src="~static/assets/img/icon/hire.png" class="imagen"/></td>      
      </tr>
      <tr style="border: 1px solid #ffffff00;font-weight: bold;">
        <td style="text-align: center;" v-for="modules in doc.modules">{{ modules.title }}</td>
      </tr>
       <tr style="border: 1px solid #ffffff00;">
        <td style="width: 20%;;text-align: center;color: #0f426f;font-size: 15px;font-style: oblique;" v-for="modules in doc.modules">{{ modules.sub_title }}</td>
      </tr>
      <tr style="background: white;">
        <td style="width: 20%;" class="td" v-for="modules2 in doc.modules">
            <button v-if="modules2.title === 'News'" class="button5 button1 button4" v-for="item in modules2.items">
              <h6 style="font-size: 15px;font-weight: bold;">{{ doc2.title }}</h6>
              <p style="font-size: 13px;">{{ doc2.description }}</p>            
            </button>
             <button v-if="modules2.title === 'Events'" class="button6 button1 button4" v-for="item in modules2.items">
              <h7 style="font-weight: bold;font-size: 13px;">{{ item.title }}</h7>
               <p style="font-style: oblique;">{{ item.subtitle }}</p>          
            </button>
            <button v-if="modules2.title != 'News' && modules2.title != 'Events'"  class="button button4 button2" v-for="item in modules2.items">
               <h7 style="font-weight: bold;font-size: 13px;">{{ item.title }}</h7>
               <p style="font-style: oblique;">{{ item.subtitle }}</p> 
            </button>
        </td>
      </tr>
      <tr style="background: white; ">
        <td class="td" style="width: 20%;">
          <button class="button button4 button2" style="margin-top: 35px;">Available</button>
        </td>
        <td class="td" style="width: 20%;">
          <button class="button button4 button3" style="margin-top: 35px;" >Coming Spring '21</button>
        </td>
      </tr>
     </table>
  </div>
  </div>
       <div class="contenido">
            <div id="inner">
                <img class="cover" src="~static/assets/img/prueba.png">
            </div>
            <div id="inner" style="padding: 20px">
              <h2 style="font-weight: bold;">TITULO 1</h2>
              <p>Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
                <a class="button_read" href="">Learn More</a>
            </div>
        </div>

      <div id="div1">
       <div class="container">
          <div class="row">
            <div class="col-lg-8" style="margin-top: 3%;margin-left: 15%; margin-bottom: 3%">
              <h2 style="text-align: center;font-weight: bold;">TITULO 3</h2>
              <p style="text-align: center;">Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
            </div>
          </div>
        </div>
     </div>

       <div class="contenido">
            <div id="inner">
                <img class="cover" src="~static/assets/img/prueba.png">
            </div>
            <div id="inner" style="padding: 20px">
              <h2 style="font-weight: bold;">TITULO 1</h2>
              <p>Are you looking for a specifications factory that continually strives to optimize the delicate balance between the need for consensus and time to market through tools and simplified procedures, while empowering the people doing the work to complete a work item in the minimal amount of time. Markdown at</p>
                <a class="button_read" href="">Learn More</a>
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
    const doc2 = await $content('news/2020-11-28-news-1').fetch();
    return { doc, doc2 }
  },
  components: { 
      Footer,
      Navbar
  }
}
</script>
<style>
button:hover {background:rgba(183, 196, 216, 0.839);}
a:hover {background:rgba(183, 196, 216, 0.839);}
.alias {cursor:alias;}
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
#div2{
  height:300px;
  width: 100%;
  background-color: #ffffff;
  color:#000000;
  display:flex;
  justify-content: center;
  align-items: center;
}
.contenido{
  width:100%;
  display:flex;
  flex-wrap:wrap;
}
#inner{
  margin:0px;
  flex:1;
  min-width:250px;
  background:#DAE8FC;
}
  .button1 {background-color: #e7e7e7; color: black; border-color: #efefef;}
  .button2 {background-color: #DAE8FC;border-color: #efefef; color: rgb(120, 9, 148); }
  .button3 {background-color: #DAE8FC; border: 2px solid #00285f; color: rgb(120, 9, 148);border-style: dotted;}
  .button4 {border-radius: 12px; }
  .button5 {
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
    width: 170px;
    height: 150px;
}
.button6 {
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
    width: 210px;
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
    width: 130px;
}
.button_read{
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 20%;
    height: 25%;
    background-color: #00285f;
    color: #ffff;
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