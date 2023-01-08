const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 ={
  "chain": [
    {
      "index": 1,
      "timestamp": 1553001359097,
      "transactions": [
        
      ],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1553001443029,
      "transactions": [
        
      ],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1553001470580,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "22f39e904a4911e9895cebbe87656b4f",
          "transactionId": "5533ffd04a4911e9895cebbe87656b4f"
        },
        {
          "amount": "21",
          "sender": "NDHBBUIBNDIKNDJK",
          "recipient": "JHSUHSUHSIJHSIOJOPS",
          "transactionId": "5c09b9804a4911e9895cebbe87656b4f"
        },
        {
          "amount": "20",
          "sender": "NDHBBUIBNDIKNDJK",
          "recipient": "JHSUHSUHSIJHSIOJOPS",
          "transactionId": "5dc4fe104a4911e9895cebbe87656b4f"
        },
        {
          "amount": "22",
          "sender": "NDHBBUIBNDIKNDJK",
          "recipient": "JHSUHSUHSIJHSIOJOPS",
          "transactionId": "61e311d04a4911e9895cebbe87656b4f"
        },
        {
          "amount": "23",
          "sender": "NDHBBUIBNDIKNDJK",
          "recipient": "JHSUHSUHSIJHSIOJOPS",
          "transactionId": "6379de704a4911e9895cebbe87656b4f"
        }
      ],
      "nonce": 78247,
      "hash": "0000a87395410dc9e74089479b0e3a07b7c39ba951c43243474c2d14b97f2167",
      "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      "index": 4,
      "timestamp": 1553001474090,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "22f39e904a4911e9895cebbe87656b4f",
          "transactionId": "656756904a4911e9895cebbe87656b4f"
        }
      ],
      "nonce": 6848,
      "hash": "000095b16ea20bef851a683e1f75c81900afee1afcbed5f1b446b16168f6a74e",
      "previousBlockHash": "0000a87395410dc9e74089479b0e3a07b7c39ba951c43243474c2d14b97f2167"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "22f39e904a4911e9895cebbe87656b4f",
      "transactionId": "677e76c04a4911e9895cebbe87656b4f"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": [
    
  ]
};




console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));