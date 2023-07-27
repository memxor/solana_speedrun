import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SpeedrunAnchor } from "../target/types/speedrun_anchor";

describe("speedrun_anchor", () =>
{
  var provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SpeedrunAnchor as Program<SpeedrunAnchor>;

  it("Initialize Player", async () =>
  {
    const [playerAccountPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PLAYER"), provider.publicKey.toBytes()], program.programId);

    await program.methods.initializePlayer("Memxor").rpc();

    const playerAccount = await program.account.playerAccount.fetch(playerAccountPDA);
    console.log(playerAccount.username);
    console.log(playerAccount.publickey);
    console.log(playerAccount.silverBalacne.toNumber());
    console.log(playerAccount.goldBalacne.toNumber());
    console.log(playerAccount.energy.toNumber());
    console.log(playerAccount.xp.toNumber());
  });
});
