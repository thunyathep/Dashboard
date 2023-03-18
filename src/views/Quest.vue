<template>
    <main class="dailyquest-page">
        <h1>Daily Quest</h1>
        <p>This is the daily quest</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-5 my-3 p-4 test-1 ">
                    <h4>show status 1</h4>
                </div>
                <div class="col-1"></div>
                <div class="col-sm-6 my-3 p-4  test-2">
                    <h4>show status 1</h4>
                </div>
                <div class="col-sm-12 my-3 p-4  test-3">
                    <h4>Quest infomation</h4>
                    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
                    
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment(){
    count.value++
}

</script>

<style lang="scss">

.button2{

    background-color: rgb(231, 231, 231);
    width: 10rem;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.test{
    color: aqua;
}

.test-1{
    background-color: rgba(255, 255, 255, 0.161);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 30vh;

}
.test-2{
    background-color: rgba(255, 255, 255, 0.161);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 30vh;
}
.test-3{
    background-color: rgba(255, 255, 255, 0.161);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 50vh;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}


</style>