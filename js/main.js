let StudentsInfo = {}
const arrOfStudents = [];
function drawStudent(){
    
    for (const key of StudentsInfo) {
       arrOfStudents.push(StudentsInfo[key]); 
       console.log("hello")
    }
    console.log(arrOfStudents)
    const div = document.createElement("div");
    // div.textContent = `Имя:${Name} Фамилия:${surname} Дата рождения: ${birth}`;
    document.querySelector("body").append(div) 
}
function generateStudent() {
    console.log("lol")

    const StudentName = document.querySelector("#name")
    const StudentSurname = document.querySelector("#surname")
    const birthdateInput = document.querySelector('#birthdate');
    const birthdate = birthdateInput.value;

    const student = {
        firstName:  StudentName.value,
        lastName: StudentSurname.value,
        birthdate: birthdate,
        
}
    drawStudent();
StudentsInfo[`${StudentName.value}-Student`] = student

}
document.querySelector(".btn").addEventListener("click", generateStudent);