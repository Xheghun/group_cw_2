<template>
  <div class="row justify-content-center">
      <div class="col-md-12">
          <div class="card card-default">
              <div class="card-header"><h3>User Details</h3></div>

              <div class="card-body col-md-3" id="border_item">
                  <li>Email: {{user["email"]}}</li>
                  <li>Password: {{user["password"]}}</li>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            user: null,
        }
    },

    created() {
           fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => (this.user = data));
    }
}
</script>

<style>
li {
    list-style: none;
    font-weight: 500;
}
</style>