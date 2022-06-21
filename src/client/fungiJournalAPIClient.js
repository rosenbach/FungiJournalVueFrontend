const getEntries = async () => {
    const response = await fetch("https://localhost:7038/Entries");
    const data = await response.json();
    return data;
}


const FungiJournalAPIClient = {
    getEntries
}

export default FungiJournalAPIClient;