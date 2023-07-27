use anchor_lang::prelude::*;

declare_id!("6z9afF7b65usqnkACWjN85xobwiFuY1iMSN6pCTf1DEA");

#[program]
pub mod speedrun_anchor {
    use super::*;

    pub fn initialize_player(ctx: Context<InitPlayer>, username: String) -> Result<()> 
    {
        let player = &mut ctx.accounts.player;

        player.username = username;
        player.publickey = ctx.accounts.signer.key();
        player.gold_balacne = 10;
        player.silver_balacne = 30;
        player.energy = 130;
        player.xp = 0;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(username: String)]
pub struct InitPlayer<'info>
{
    #[account(mut)]
    pub signer: Signer<'info>,
    
    #[account(init, payer = signer, seeds = [b"PLAYER", signer.key().as_ref()], bump, space = 76 + username.len())]
    pub player: Account<'info, PlayerAccount>,

    pub system_program: Program<'info, System>
}

#[account]
pub struct PlayerAccount
{
    pub username: String,
    pub publickey: Pubkey,
    pub gold_balacne: u64,
    pub silver_balacne: u64,
    pub energy: u64,
    pub xp: u64,
}