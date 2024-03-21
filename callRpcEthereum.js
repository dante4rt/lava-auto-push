const axios = require('axios');

async function callRpcEthereum(url, count) {
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: {
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
      },
    });

    console.log(
      `Ethereum RPC has been called for ${++count} times – ${JSON.stringify(
        data
      )}`.green
    );
  } catch (error) {
    console.log(
      `Error in Ethereum RPC: ${JSON.stringify(error.response.data)}`.red
    );
  }
}

module.exports = callRpcEthereum;
