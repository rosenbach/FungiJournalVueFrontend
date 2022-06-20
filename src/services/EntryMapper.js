//aufbereitung der JSON-daten bzgl besserer Darstellung
//z.B. character escapings etc, currency strings
//returned ein sauberes Datenformat für meine View (so wie ich es erwarten möchte)

//1 Mapper pro Komponent wäre möglich

const createViewDate = (entry) => {
    const viewDate = new Date(entry);
    const nextMonth = viewDate.getMonth() + 1;
    return viewDate.getDate().toString() + "." + nextMonth.toString();
}

const EntryMapper = {
    createViewDate
}

export default EntryMapper;