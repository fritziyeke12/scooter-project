const User = require('./User')
const Scooter = require('./Scooter')


class ScooterApp {
  //properties
  constructor(){
    this.stations = {
      first:[],
      second:[],
      third:[]
    };
    
    this.registeredUsers = {}
  }

  //methods
  registerUser(username, password, age){
    const user = new User(username, password, age)
    //check that the user isnt already registered
    if(!(Object.keys(this.registeredUsers)).includes(username) && user.age >= 18){
      this.registeredUsers[username] = user;
      console.log("user has been registered")
    } else{
      throw Error("already registered or too young to register");
    }
  }

  logInUser(username, password){
    try { 
      if(Object.keys(this.registeredUsers).includes(username)){
        console.log(this.registeredUsers[username])
        this.registeredUsers[username].login(password);
        //console.log("user is logged in")
      } else{
        throw new Error("Username or password incorrect");
      }
    } catch (error) {
      throw new Error("Username or password is incorrect");
    }
    }

  logOutUser(username){
    if(Object.keys(this.registeredUsers).includes(username)){
      this.registeredUsers[username].logout();
      console.log("user is logged out")
    } else{
      throw new Error("no such user is logged in")
    }
  }

  createScooter(station){
    if(!(Object.keys(this.stations)).includes(station)){
      throw new Error("no such station");
    }
    let scooter = new Scooter(station);
    this.stations[station].unshift(scooter);
    console.log(scooter);
    console.log("created new scooter");
  }

}

let app = new ScooterApp();
// app.registerUser("jack", "pass", 19);
// app.registerUser("jonjo", "pass", 20)
// app.logInUser("jack", "pass");
// app.logInUser("jonjo", "pass");
app.createScooter("first");
app.createScooter("second");
console.log(app)
module.exports = ScooterApp
