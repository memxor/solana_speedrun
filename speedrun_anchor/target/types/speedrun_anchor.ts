export type SpeedrunAnchor = {
  "version": "0.1.0",
  "name": "speedrun_anchor",
  "instructions": [
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "PLAYER"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "playerAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "publickey",
            "type": "publicKey"
          },
          {
            "name": "goldBalacne",
            "type": "u64"
          },
          {
            "name": "silverBalacne",
            "type": "u64"
          },
          {
            "name": "energy",
            "type": "u64"
          },
          {
            "name": "xp",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: SpeedrunAnchor = {
  "version": "0.1.0",
  "name": "speedrun_anchor",
  "instructions": [
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "PLAYER"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "playerAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "publickey",
            "type": "publicKey"
          },
          {
            "name": "goldBalacne",
            "type": "u64"
          },
          {
            "name": "silverBalacne",
            "type": "u64"
          },
          {
            "name": "energy",
            "type": "u64"
          },
          {
            "name": "xp",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
