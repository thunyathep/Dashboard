<template>
  <div>
    <div class="contrainer-fluid">
      <div class="row">
        <div class="col-12">
          <h1>Quest</h1>
        </div>
        <div>
          <div class="col-12">
            <h2>Users</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in test.testStress">
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.website }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAxios } from "../store/useAxios.js";

const test = useAxios();
const items = ref([{ message: "Hello"}, { message: "World"}])

onMounted(() => {
  test.fetchUsers();
});
</script>
