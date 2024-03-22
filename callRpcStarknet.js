const axios = require('axios');

async function callRpcStarknet(url, count) {
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: {
        jsonrpc: '2.0',
        id: '1',
        method: 'starknet_blockNumber',
      },
    });

    console.log(
      `StarkNet RPC has been called for ${++count} times – Latest Batch: ${JSON.stringify(
        data.result
      )}`.magenta
    );
  } catch (error) {
    console.error(
      'Error fetching latest StarkNet batch:',
      error.response ? error.response.data : error.message
    );
  }
}

module.exports = callRpcStarknet;
