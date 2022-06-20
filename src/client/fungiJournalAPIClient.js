const getEntries = async () => {
    const response = await fetch("https://localhost:7038/Entries");
    const data = await response.json();
    return data;
}

const deleteEntry = async (entryId) => {
    const response = await fetch("https://localhost:7038/Entries/" + entryId, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}

const test = (ye) => {
    return ye;
}

const FungiJournalAPIClient = {
    getEntries,
    deleteEntry,
    test
}

export default FungiJournalAPIClient;