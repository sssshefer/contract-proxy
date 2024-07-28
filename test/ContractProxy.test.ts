import { token } from "../typechain-types/@openzeppelin/contracts";
import { loadFixture, ethers, expect, upgrades } from "./setup";

describe("ContractProxy", function () {
  async function deploy() {
    const [owner, user1, user2, user3] = await ethers.getSigners();
    const ContractProxyFactory = await ethers.getContractFactory("ContractProxy", owner);
    const shefToken = await upgrades.deployProxy(ContractProxyFactory, [owner.address], {
      initializer:"initialize",
      kind:"uups"
    });
    await shefToken.waitForDeployment();
    return { owner, user1, user2, user3, shefToken }
  }

  describe("Deployment", function () {
    it("Working proxy", async function () {
      const { owner, user1, user2, user3, shefToken } = await loadFixture(deploy);

      const mintTx = await shefToken.safeMint(owner.address,1,  "123");
      await mintTx.wait();

      expect(await shefToken.balanceOf(owner.address)).to.eq(1);

      const ContractProxyFactoryV2 = await ethers.getContractFactory("ContractProxyV2", owner);
      const shefTokenV2 = await upgrades.upgradeProxy(shefToken, ContractProxyFactoryV2);

      expect(await shefTokenV2.balanceOf(owner.address)).to.eq(1);
      expect(await shefTokenV2.newV2Feature()).to.be.true;

    });
  });
});