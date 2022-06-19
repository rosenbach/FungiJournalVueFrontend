<script>
import Entries from "./components/EntriesView.vue";

export default {
  name:'App',
  components:{
    Entries
  }
}
</script>

<template>
  <Entries/>
</template>

<style>
 .card-icon {
  font-size: 2em;
}

.card-label {
  font-weight: bold;
}

.card {
  text-align: left;
  margin: 1em;
  padding: 1em;
  border: 2px solid;
  border-radius: 0.5em;
  box-shadow: 5px 10px;
}
</style>
