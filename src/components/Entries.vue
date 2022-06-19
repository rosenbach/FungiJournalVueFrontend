<script>
import fungiJournalAPIClient from "../client/fungiJournalAPIClient";


export default {
  data () {
    return {
      users: null,
    }
  },
  async created () {
    console.log(await fungiJournalAPIClient.getEntries());
  }
}</script>