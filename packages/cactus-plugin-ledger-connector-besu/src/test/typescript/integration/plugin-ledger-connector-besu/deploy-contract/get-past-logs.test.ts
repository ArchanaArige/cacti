import "jest-extended";
import { v4 as uuidv4 } from "uuid";
import { PluginRegistry } from "@hyperledger/cactus-core";
import {
  PluginLedgerConnectorBesu,
  PluginFactoryLedgerConnector,
  GetPastLogsV1Request,
} from "../../../../../main/typescript/public-api";
import { PluginKeychainMemory } from "@hyperledger/cactus-plugin-keychain-memory";
import { BesuTestLedger } from "@hyperledger/cactus-test-tooling";
import { LogLevelDesc } from "@hyperledger/cactus-common";
import HelloWorldContractJson from "../../../../solidity/hello-world-contract/HelloWorld.json";
import Web3 from "web3";
import { PluginImportType } from "@hyperledger/cactus-core-api";

const logLevel: LogLevelDesc = "INFO";

describe("PluginLedgerConnectorBesu", () => {
  const besuTestLedger = new BesuTestLedger();

  beforeAll(async () => {
    await besuTestLedger.start();
  });
  afterAll(async () => {
    await besuTestLedger.stop();
    await besuTestLedger.destroy();
  });
  test("can get past logs of an account", async () => {
    const rpcApiHttpHost = await besuTestLedger.getRpcApiHttpHost();
    const rpcApiWsHost = await besuTestLedger.getRpcApiWsHost();

    /**
     * Constant defining the standard 'dev' Besu genesis.json contents.
     *
     * @see https://github.com/hyperledger/besu/blob/1.5.1/config/src/main/resources/dev.json
     */
    const firstHighNetWorthAccount = besuTestLedger.getGenesisAccountPubKey();

    const web3 = new Web3(rpcApiHttpHost);
    const testEthAccount = web3.eth.accounts.create(uuidv4());

    const keychainEntryKey = uuidv4();
    const keychainEntryValue = testEthAccount.privateKey;
    const keychainPlugin = new PluginKeychainMemory({
      instanceId: uuidv4(),
      keychainId: uuidv4(),
      // pre-provision keychain with mock backend holding the private key of the
      // test account that we'll reference while sending requests with the
      // signing credential pointing to this keychain entry.
      backend: new Map([[keychainEntryKey, keychainEntryValue]]),
      logLevel,
    });
    keychainPlugin.set(
      HelloWorldContractJson.contractName,
      JSON.stringify(HelloWorldContractJson),
    );
    const factory = new PluginFactoryLedgerConnector({
      pluginImportType: PluginImportType.Local,
    });

    const connector: PluginLedgerConnectorBesu = await factory.create({
      rpcApiHttpHost,
      rpcApiWsHost,
      instanceId: uuidv4(),
      pluginRegistry: new PluginRegistry({ plugins: [keychainPlugin] }),
    });
    await connector.onPluginInit();

    const req: GetPastLogsV1Request = { address: firstHighNetWorthAccount };
    const pastLogs = await connector.getPastLogs(req);
    expect(pastLogs).toBeTruthy();
    expect(pastLogs).toBeObject();
    expect(pastLogs.logs).toBeTruthy();
  });
});
