import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SpeedunrAnchor } from "../target/types/speedunr_anchor";

describe("speedunr_anchor", () =>
{
  var provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SpeedunrAnchor as Program<SpeedunrAnchor>;

  it("Initialize Player!", async () =>
  {
    const [playerAccountPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PLAYER"), provider.publicKey.toBytes()], program.programId);

    await program.methods.initializePlayer("Memxor").rpc();

    const playerAccount = await program.account.playerAccount.fetch(playerAccountPDA);
    console.log(playerAccount.username);
    console.log(playerAccount.publickey);
    console.log(playerAccount.silverBalacne.toNumber());
    console.log(playerAccount.goldBalacne.toNumber());
    console.log(playerAccount.energy.toNumber());
  });
});
