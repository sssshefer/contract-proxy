import { loadFixture, ethers, expect } from "./setup";

describe("ContractProxy", function () {
  async function deploy() {
    const [owner, user1, user2, user3] = await ethers.getSigners();
    const ContractProxyFactory = await ethers.getContractFactory("ContractProxy", owner);
    const contractProxy = await ContractProxyFactory.deploy();
    await contractProxy.waitForDeployment()
    return { owner, user1, user2, user3, contractProxy }
  }

  describe("Deployment", function () {
    it("Deployment 1", async function () {
      const { owner, user1, user2, user3, contractProxy } = await loadFixture(deploy);
    });
  });
});