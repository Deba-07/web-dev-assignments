const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
]

function checkResults(name) {
    for (let student of students) {
        if (student.name === name) {
            return student.marks > 90 ?
                console.log(`Congratulations ${student.name}! you have cleared the exam`) :
                console.log(`Sorry! you have not cleared the exam`)
        }
    }
    console.log('Invalid user!!!')
}

checkResults("Mithun");
checkResults("Prabir");
checkResults("Mithun s");