<template>
  <div class="container">
    <div class="row">
      <div class="form">
        <img
          src="@/assets/nutri.jpeg"
          class="rounded mx-auto d-block pic1"
          alt="..."
        />
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">User name</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
            />
          </div>
          <div class="mb-3">
            <label for="pass" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="pass"
              v-model="password"
            />
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary" @click="getData">
              Submit
            </button>
            <button type="submit" @click="reloadPage" class="btn btn-danger">
              Close
            </button>
          </div>
        </form>

        <div class="ver">
          <span> Server:.\sqlexpress</span>
          <br />
          Database: YTE Nutrisoft Backup 22.11.21
          <br />
          Ver: 2.22.48.1627
        </div>
        <img class="picture" src="@/assets/kapsam.jpeg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Log",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    getData() {
      console.log(this.username);
      console.log(this.password);
      localStorage.setItem("userid", this.username);
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.form {
  overflow: hidden;
  display: block;
  max-width: 500px;
  margin: 30px auto;
  min-height: 300px;
  border: 7px solid rgb(13, 79, 133);
  padding: 30px;
  border-radius: 25px;
  height: 600px;
}

.picture {
  position: relative;
  left: 320px;
  width: 100px;
  height: 100px;
}
.pic1 {
  width: 150px;
}

.ver {
  color: white;
}
</style>

