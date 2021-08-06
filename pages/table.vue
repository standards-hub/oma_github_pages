<template>
  <div class="home">
       <Navbar />
       <Footer />
    <div class="tier">
      <div class="container">
        <div style="width:1213px">
           <table class="table-striped table-bordered; box-shadow: 0px 10px 10px -6px black;" style="margin-top: 150px;">
            <thead>
              <tr style="background-color: #65b2e8;color: #FFFF;">
                <th scope="col">Columna1</th>
                <th scope="col">Columna2</th>
                <th scope="col">Columna3</th>
                <th scope="col">Columna4</th>
                <th scope="col">Columna5</th>
                <th scope="col">Columna6</th>
                <th scope="col">Columna7</th>
                <th scope="col">Columna8</th>
                <th scope="col">Columna9</th>
                <th scope="col">Columna10</th>
              </tr>
              <tr >
                <td scope="col" v-for="subject in doc.subjects">{{ subject.title }}</td>  
              </tr>
              <tr >
                <td scope="col" v-for="subject in doc.subjects">{{ subject.title }}</td>  
              </tr>
              <tr >
                <td scope="col" v-for="subject in doc.subjects">{{ subject.title }}</td>  
              </tr>
              <tr >
                <td scope="col" v-for="subject in doc.subjects">{{ subject.title }}</td>  
              </tr>
            </thead>
            <tbody id="con">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

<script>
    import $ from "jquery";
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    export default {
        head() {
            return {
            titleTemplate: `%s`,
            title: 'CIM - Table',
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