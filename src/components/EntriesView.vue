FungiJournalAPIClient<script>
import FungiJournalAPIClient from "../client/FungiJournalAPIClient";
import Entry from "./Entry.vue";

export default {
    name: "entries-view",
    data() {
        return {
            entries: null,
        };
    },
    async created() {
        await FungiJournalAPIClient.getEntries()
            .then(data => this.entries = data);
    },
    components: { Entry }
}
</script>

<template>
  <h3>My Entries</h3>
  <ol style="list-style-type:none">
    <li v-for="entry in entries" v-on:delete-row="deleteThisRow(entry)" :key="entry.entryId">
      <Entry v-bind="entry"/>
    </li>
  </ol>
</template>