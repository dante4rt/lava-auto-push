require('colors');
const readline = require('readline-sync');
let count = 0;
const callRpcEthereum = require('./callRpcEthereum');
const callRpcNear = require('./callRpcNear');
const callRpcAxelar = require('./callRpcAxelar');
const callRpcStarkNet = require('./callRpcStarknet');

async function loopRPC() {
  console.log('Choose your preferred blockchain:');
  console.log('1. Ethereum');
  console.log('2. NEAR');
  console.log('3. StarkNet');
  console.log('4. Axelar');

  const choice = readline.question('Enter your choice: ');

  let url;
  switch (choice) {
    case '1':
      url = readline.question('Enter your Lava RPC URL (Ethereum): ');
      while (true) {
        await callRpcEthereum(url, count);
        const randomMinutes = Math.floor(Math.random() * 59) + 1;
        console.log(`Waiting for ${randomMinutes} minute(s)...`.yellow);
        await new Promise((resolve) =>
          setTimeout(resolve, randomMinutes * 60 * 1000)
        );
      }
      break;
    case '2':
      url = readline.question('Enter your NEAR RPC URL: ');
      while (true) {
        await callRpcNear(url, count);
        const randomMinutes = Math.floor(Math.random() * 59) + 1;
        console.log(`Waiting for ${randomMinutes} minute(s)...`.yellow);
        await new Promise((resolve) =>
          setTimeout(resolve, randomMinutes * 60 * 1000)
        );
      }
      break;
    case '3':
      url = readline.question('Enter your StarkNet RPC URL: ');
      while (true) {
        await callRpcStarkNet(url, count);
        const randomMinutes = Math.floor(Math.random() * 59) + 1;
        console.log(`Waiting for ${randomMinutes} minute(s)...`.yellow);
        await new Promise((resolve) =>
          setTimeout(resolve, randomMinutes * 60 * 1000)
        );
      }
      break;
    case '4':
      url = readline.question('Enter your Axelar RPC URL: ');
      while (true) {
        await callRpcAxelar(url, count);
        const randomMinutes = Math.floor(Math.random() * 59) + 1;
        console.log(`Waiting for ${randomMinutes} minute(s)...`.yellow);
        await new Promise((resolve) =>
          setTimeout(resolve, randomMinutes * 60 * 1000)
        );
      }
      break;
    default:
      console.log('Invalid choice. Please choose 1, 2, 3, or 4.');
  }
}

loopRPC();
