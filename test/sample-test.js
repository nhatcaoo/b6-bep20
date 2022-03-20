const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello World", function () {
  const message = "Hello world !!!!"
  const messageSecond = "Bye world !!!!"

  it("Should return message correctly", async function () {
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const helloWorld = await HelloWorld.deploy(message)
    await helloWorld.deployed() 
    expect(await helloWorld.printHelloWorld()).to.be.equal(message)
    await helloWorld.updateMessage(messageSecond)
    expect(await helloWorld.printHelloWorld()).to.be.equal(messageSecond)
  });
});