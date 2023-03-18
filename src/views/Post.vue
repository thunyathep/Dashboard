<template>
  <main class="post-page">
    <h1>Post</h1>
    <p>This is the post page</p>
    <row>
      <button
        class="btn btn-primary"
        data-bs-target="#collapseTarget1"
        data-bs-toggle="collapse"
      >
        ผลรวมของการโพสหต์ทั้งหมด
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        class="btn btn-primary mr-1"
        data-bs-target="#collapseTarget2"
        data-bs-toggle="collapse"
      >
        ปัญหาด้านความการเรียน
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        class="btn btn-primary mr-1"
        data-bs-target="#collapseTarget2"
        data-bs-toggle="collapse"
      >
        ปัญหาด้านครอบครัว
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        class="btn btn-primary mr-1"
        data-bs-target="#collapseTarget2"
        data-bs-toggle="collapse"
      >
        ปัญหาด้านความรัก
      </button>
      &nbsp;&nbsp;&nbsp;
    </row>
    <br />
    &nbsp;&nbsp;&nbsp;
    <row>
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab no-body title="ภาพรวม">
              <b-card-img
                bottom
                src="https://picsum.photos/600/200/?image=21"
                alt="Image 21"
              ></b-card-img>
              <b-card-footer>Picture 1 footer</b-card-footer>
            </b-tab>

            <b-tab no-body title="ปัญหาความรัก">
              <b-card-img
                bottom
                src="https://picsum.photos/600/200/?image=25"
                alt="Image 25"
              ></b-card-img>
              <b-card-footer>Picture 2 footer</b-card-footer>
            </b-tab>

            <b-tab no-body title="ปัญหาสุขภาพ">
              <b-card-img
                bottom
                src="https://picsum.photos/600/200/?image=26"
                alt="Image 26"
              ></b-card-img>
              <b-card-footer>Picture 3 footer</b-card-footer>
            </b-tab>

            <b-tab title="ปัญหาครอบครัว">
              <b-card-title
                >This tab does not have the <code>no-body</code> prop
                set</b-card-title
              >
              <b-card-text>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate
                ex nulla tempor. Laborum consequat non elit enim exercitation
                cillum aliqua consequat id aliqua. Esse ex consectetur mollit
                voluptate est in duis laboris ad sit ipsum anim Lorem.
                Incididunt veniam velit elit elit veniam Lorem aliqua quis
                ullamco deserunt sit enim elit aliqua esse irure.
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </row>
    &nbsp;&nbsp;&nbsp;
    <row>
      <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
    </row>
    &nbsp;&nbsp;&nbsp;
    <row>
      <div>
        <b-button @click="toggleBusy">Toggle Busy State</b-button>
        <b-table :items="items" :busy="isBusy" class="mt-3" outlined>
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
        </b-table>
      </div>
    </row>
  </main>
</template>

<script>
//import * as _ from "../Post/AllPost.vue";
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: false,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "danger",
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      isBusy: false,
      items: [
        { first_name: "Dickerson", last_name: "MacDonald", age: 40 },
        { first_name: "Larsen", last_name: "Shaw", age: 21 },
        { first_name: "Geneva", last_name: "Wilson", age: 89 },
        { first_name: "Jami", last_name: "Carney", age: 38 },
      ],
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
  },
};
</script>
