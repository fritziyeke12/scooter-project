const User = require("./User")

let num = 0;

class Scooter{
  //properties
  constructor(station){
    this.station = station;
    this.user = null;
    this.nextSerial = num += 1;
    this.serial = this.nextSerial + 0;
    this.charge = 100;
    this.isBroken = false;

  }

  rent(){
    if(this.charge > 20 && this.isBroken == false){
      pass

    } else{
      throw new Error("scooter needs to charge or scooter needs repair")
    }
  }

  dock(station){
    this.station = station;
    this.user = null;
  }
}


module.exports = Scooter;
