<script>
import fungiJournalAPIClient from "../client/fungiJournalAPIClient";


export default {
  data () {
    return {
      entries: null,
    }
  },
  async created () {
    entries = await fungiJournalAPIClient.getEntries();
  }
}</script>