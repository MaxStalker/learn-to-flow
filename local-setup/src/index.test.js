import path from "path";
import {
  init,
  sendTransaction,
  deployContractByName,
  getTransactionCode,
  getContractCode,
} from "flow-js-testing/dist";
import { getScriptCode } from "flow-js-testing/dist/utils/file";
import { executeScript } from "flow-js-testing/dist/utils/interaction";
import { Int, Address } from "@onflow/types";
import { getContractAddress } from "flow-js-testing/dist/utils/contract";
import { getAccountAddress } from "flow-js-testing/dist/utils/create-account";

const basePath = path.resolve(__dirname, "./cadence");

beforeAll(() => {
  init(basePath);
});

describe("Test basic functionality", () => {
  test("Send sum script", async () => {
    const code = await getScriptCode({
      name: "get-summ-of-two",
    });
    const args = [[10, 12, Int]];
    const result = await executeScript({
      code,
      args,
    });
    expect(result).toBe(22);
  });
});

describe("Deployment", () => {
  test("Deploy FlowFarm contract", async () => {
    let deployContract;
    try {
      deployContract = await deployContractByName({
        name: "FlowFarm",
      });
    } catch (e) {
      console.log(e);
    }
    expect(deployContract.errorMessage).toBe("");
  });

  test("Get FlowFarm contract address", async () => {
    const address = await getContractAddress("FlowFarm");
    console.log({ address });
  });

  test("Mint new resource", async () => {
    const FlowFarm = await getContractAddress("FlowFarm");
    const Alice = await getAccountAddress("Alice");
    const addressMap = {
      FlowFarm,
    };
    const code = await getTransactionCode({
      name: "mint-badge",
      addressMap,
    });

    const signers = [Alice];

    let txResult;
    try {
      txResult = await sendTransaction({
        code,
        signers,
      });
    } catch (e) {
      console.log(e);
    }

    expect(txResult.errorMessage).toBe("");
  });

  test("Read name on the badge", async () => {
    const FlowFarm = await getContractAddress("FlowFarm");
    const Alice = await getAccountAddress("Alice");
    const code = await getScriptCode({
      name: "get-badge-name",
      addressMap: { FlowFarm },
    });
    const args = [[Alice, Address]];
    const name = await executeScript({
      code,
      args,
    });
    expect(name).toBe("Leon");
  });
});
