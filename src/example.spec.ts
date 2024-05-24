import { assert } from "chai";

import { 
  deployedERC1155Validation,
  mintedERC1155Validation,
  deployedERC721Validation,
  mintERC721Validation,
  deployedERC20Validation,
  mintERC20Validation,
  burnedERC721Validation
} from "./examples";

suite("Quests Testing", () => {
  const userWalletAddress = "0xe6eB28398CCBe46aA505b62b96822c2Ce8DAABf4"
  test("deployedERC1155Validation", async () => {
    assert.equal(await deployedERC1155Validation(userWalletAddress), true);
  });
  test("mintedERC1155Validation", async () => {
    assert.equal(await mintedERC1155Validation(userWalletAddress), true);
  });
  test("deployedERC721Validation", async () => {
    assert.equal(await deployedERC721Validation(userWalletAddress), true);
  });
  test("mintERC721Validation", async () => {
    assert.equal(await mintERC721Validation(userWalletAddress), true);
  });
  test("deployedERC20Validation", async () => {
    assert.equal(await deployedERC20Validation(userWalletAddress), true);
  });
  test("mintERC20Validation", async () => {
    assert.equal(await mintERC20Validation(userWalletAddress), true);
  });
  test("burnedERC721Validation", async () => {
    assert.equal(await burnedERC721Validation(userWalletAddress), true);
  });
});
