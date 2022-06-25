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

const putFungi = async (fungiToUpdate) => {
    const response = await fetch("https://localhost:7038/Fungis/" + fungiToUpdate.entryId, {
        method: 'PUT',
        body: JSON.stringify(fungiToUpdate)
    });
    const data = await response.json();
    return data;
}

const FungiJournalAPIClient = {
    getEntries,
    deleteEntry,
    putFungi
}

export default FungiJournalAPIClient;