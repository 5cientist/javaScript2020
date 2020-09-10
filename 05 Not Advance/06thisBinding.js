const hanshir = {
    firstName = "Hanshir",
    lastName = "lukku",
    role: "Admin",
    courseCount: 3,

    getInfo : function(){
        console.log(`
        firt name is ${this.firstName}
        last name is ${this.lastName}
        his role is ${this.role}
        and he is stuadying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

hanshir.getInfo.blind(dj)();