const students = [
    { name: "Fionna", gender: "g" }, { name: "Arya", gender: "b" },
    { name: "Aerish", gender: "g" }, { name: "Angela", gender: "g" },
    { name: "Lio", gender: "b" }, { name: "Aviel", gender: "b" },
    { name: "Kyara", gender: "g" }, { name: "Charles", gender: "b" },
    { name: "Gavin", gender: "b" }, { name: "Audi", gender: "g" },
    { name: "Ano", gender: "b" }, { name: "Edzhar", gender: "b" },
    { name: "Caleb", gender: "b" }, { name: "Fabian", gender: "b" },
    { name: "Astro", gender: "b" }, { name: "Satya", gender: "b" },
    { name: "Grego", gender: "b" }, { name: "Hans", gender: "b" },
    { name: "Evan", gender: "b" }, { name: "Hugo", gender: "b" },
    { name: "Imelda", gender: "g" }, { name: "Nathan", gender: "b" },
    { name: "Joy", gender: "g" }, { name: "Kennard", gender: "b" },
    { name: "Niko", gender: "b" }, { name: "Mario", gender: "b" },
    { name: "Michael", gender: "b" }, { name: "Ayu", gender: "g" },
    { name: "Novandra", gender: "b" }, { name: "Rama", gender: "b" },
    { name: "Quinn", gender: "b" }, { name: "Steven", gender: "b" },
    { name: "William", gender: "b" }, { name: "Arian", gender: "b" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function randomizeAll() {
    const shuffled = shuffle([...students]);
    displaySeating(shuffled);
}

function separateBoysAndGirls() {
    let boys = students.filter(s => s.gender === "b");
    let girls = students.filter(s => s.gender === "g");
    boys = shuffle(boys);
    girls = shuffle(girls);
    displaySeating([...girls, ...boys]);
}

function displaySeating(arrangedStudents) {
    const table = document.getElementById("seatingTable").querySelector("tbody");
    table.innerHTML = "";
    for (let i = 0; i < arrangedStudents.length; i += 2) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerText = arrangedStudents[i].name;
        cell1.className = arrangedStudents[i].gender === "b" ? "boy" : "girl";
        if (arrangedStudents[i + 1]) {
            cell2.innerText = arrangedStudents[i + 1].name;
            cell2.className = arrangedStudents[i + 1].gender === "b" ? "boy" : "girl";
        }
    }
}
