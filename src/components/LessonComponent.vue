<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card card-default">
        <div class="card-header"><h3>Lessons List</h3></div>

        <div class="card-body">
          <div class="row">
            <div
              class="col-md-2"
              id="border_item"
              v-for="lesson in lessons"
              v-bind:key="lesson"
            >
              <li>topic: {{ lesson["topic"] }}</li>
              <li>location: {{ lesson["location"] }}</li>
              <li>price: {{ lesson["price"] }}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lessons: null,
    };
  },

  created() {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => (this.lessons = data.lessons));
  },
};
</script>
