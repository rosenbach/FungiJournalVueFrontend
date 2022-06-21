FungiJournalAPIClient<script>
import fungiJournalAPIClient from "../client/FungiJournalAPIClient";
import Entry from "./Entry.vue";

export default {
    name: "entries-view",
    data() {
        return {
            entries: null,
        };
    },
    methods:{
        async deleteThisEntry(entryToDelete, entries) {
            entries.splice(entries.indexOf(entryToDelete), 1);
            await this.deleteInDatabase(entryToDelete);
        },
        async deleteInDatabase(entryToDelete){
          const response = await fetch("https://localhost:7038/Entries/" + entryToDelete.entryId, {
              method: 'DELETE'
          });
          const data = await response.json();
          return data;
        }
    },
    async created() {
        await fungiJournalAPIClient.getEntries()
            .then(data => this.entries = data);
    },
    components: { Entry,
    fungiJournalAPIClient }
}
</script>

<template>
  <h3>My Entries</h3>
  <ol style="list-style-type:none">
      <Entry v-for="entry in entries" :key="entry.entryId" v-on:delete-entry="deleteThisEntry(entry, entries)" v-bind="entry"/>
  </ol>
</template>