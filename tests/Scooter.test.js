const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter class checks', () => {
  test('Scooter properties', () => {
    const scooter1 = new Scooter("1st");
    expect(scooter1).toHaveProperty("station");
    expect(scooter1).toHaveProperty("user");
    expect(scooter1).toHaveProperty("serial");
    expect(scooter1).toHaveProperty("nextSerial");
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("station");
    expect(scooter1).toHaveProperty("isBroken");

  })

  test("Scooter methods", () => {
    const scooter1 = new Scooter("2nd");
    scooter1.charge = 15;
    expect(scooter1.rent()).toThroError("scooter needs to charge or scooter needs repair")
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
