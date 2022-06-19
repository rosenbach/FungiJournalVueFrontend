const getEntries = async () => {
    const response = await fetch("https://localhost:7038/Entries");
    const data = await response.json();
    return data;
}

const getEntry = async (id) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const fungiJournalAPIClient = {
    getEntries,
    getEntry
}

export default fungiJournalAPIClient;