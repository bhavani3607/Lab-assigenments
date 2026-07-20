"use strict";
class College {
    collegeName = "SVECW";
    static location = "Bhimavaram";
    show() {
        console.log(this.collegeName);
        console.log(College.location);
    }
}
let c = new College();
c.show();
