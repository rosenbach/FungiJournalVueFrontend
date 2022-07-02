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

const putEntry = async (entryToUpdate) => {
    const response = await fetch("https://localhost:7038/Entries/" + entryToUpdate.entryId, {
        method: 'PUT',
        body: JSON.stringify(entryToUpdate)
        ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

const putFungi = async (fungiToUpdate) => {
    const response = await fetch("https://localhost:7038/Fungis/" + fungiToUpdate.fungiId, {
        method: 'PUT',
        body: JSON.stringify(fungiToUpdate)
        ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

const FungiJournalAPIClient = {
    getEntries,
    deleteEntry,
    putEntry,
    putFungi
}

export default FungiJournalAPIClient;