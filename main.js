#!/usr/bin/env node
//optional Parameter JSON_OBJECT
function user(std_id, name, age, gender, course) {
    return {
        STUDENT_ID: std_id,
        NAME: name,
        AGE: age,
        GENDER: gender,
        COURSE: course
    };
}
console.log(user(12723, "AFSHAN AHMAR", 34, "female", "GIAIC"));
export {};
