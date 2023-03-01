let StudentsInfo = {}
const arrOfStudents = [];
function drawStudent() {
// поконсолить что лужит в StudentsInfo добавив несколько стундентов
    for (const key in StudentsInfo) {
        arrOfStudents.push(StudentsInfo[key]);
        console.log("hello")
    }
    // по консолить что мы тут сделали сверху что тут arrOfStudents лежит
    const div = document.createElement("div");
    arrOfStudents.forEach((el) => 
    // вот тут ты перебираешь массив с обьектами ( твоими студентами ) и генерируешь СПИСОК в лишке один студент
    ))
    // div.textContent = `Имя:${Name} Фамилия:${surname} Дата рождения: ${birth}`; 
    document.querySelector("body").append(div)
}
function generateStudent() {

    const StudentName = document.querySelector("#name")
    const StudentSurname = document.querySelector("#surname")
    const birthdateInput = document.querySelector('#birthdate');
    const birthdate = birthdateInput.value;

    const student = {
        firstName: StudentName.value,
        lastName: StudentSurname.value,
        birthdate: birthdate,

    }
    StudentsInfo[`${StudentName.value}-Student`] = student

    drawStudent();

}
document.querySelector(".btn").addEventListener("click", generateStudent);