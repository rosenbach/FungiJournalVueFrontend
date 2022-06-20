<script>
import fungiJournalAPIClient from "../client/fungiJournalAPIClient";
import Entry from "./Entry.vue";

export default {
    name: "entries-view",
    data() {
        return {
            entries: null,
        };
    },
    async created() {
        await fungiJournalAPIClient.getEntries()
            .then(data => this.entries = data);
    },
    components: { Entry }
}
</script>

<template>
  <h3>My Entries</h3>
  <ol style="list-style-type:none">
    <li v-for="entry in entries" :key="entry.entryId">
      <Entry v-bind="entry"/>
    </li>
  </ol>
</template>