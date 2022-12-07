
alert("مرحباً بك في موقعي! انا نوره، وسوف احسب درجتك");
let grade= prompt("ادخل درجتك");
        
        if(grade>=90) {
            console.log("لقد حصلت على امتياز 🥳");
        } 
        else if(grade>=80) {
            console.log("لقد حصلت على جيد جداً🤩");
        }
        else if(grade>=70) {
            console.log("لقد حصلت على جيد🙂");
        }
        else if(grade>=60) {
            console.log("لقد حصلت على مقبول😕");
        }
        else if(grade>=50) {
            console.log("لقد حصلت على ضعيف☹️");
        }
        else {
            console.log("راسب💔");
        }