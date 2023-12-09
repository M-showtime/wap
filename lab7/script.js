
//Question - 1 

function askPassword(ok, fail){
    let Password = prompt("Password?", '');
    if (Password == "rockstar") ok(); 
    else fail();
}
let user ={
    name:"John",
    loginOk(){
alert(`${this.name} logged in`);
    },
    loginFail(){
        alert(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk, user.loginFail);
// //using bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// //using applyy
// askPassword(()=>user.loginOk.apply(user), ()=>user.loginFail.apply(user));
// //using call
// askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
// //using wrapper
// askPassword(function() {user.loginOk();}, function(){user.loginFail();});


//Question - 2 


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
      this.students.forEach(function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)); //   <--------BIND
    },
  };
  group.showList();