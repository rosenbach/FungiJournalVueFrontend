const getEntries = async () => {
    const response = await fetch("https://localhost:7038/Entries");
    const data = await response.json();
    return data;
}

const deleteEntry = async (entryToDelete) => {
    const response = await fetch("https://localhost:7038/Entries/" + entryToDelete.entryId, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}


const FungiJournalAPIClient = {
    getEntries,
    deleteEntry
}

export default FungiJournalAPIClient;