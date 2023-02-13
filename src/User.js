class User {
  //properties
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;

  }

  //methods
  login(password){
    if(password === this.password){
      this.loggedIn = true;
    } else{
      throw new Error("incorrect password");
    }
  }

  logout(){
    this.loggedIn = false;
  }
}

//const user = new User("jack", "pass", 19);
//console.log(user);

module.exports = User
