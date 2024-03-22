const axios = require('axios');

async function callRpcAxelar(url, count) {
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: {
        jsonrpc: '2.0',
        id: '1',
        method: 'status',
      },
    });

    console.log(
      `Axelar RPC has been called for ${++count} times – Latest Block: ${JSON.stringify(
        data.result.sync_info.latest_block_height
      )}`.blue
    );
  } catch (error) {
    console.error(
      'Error fetching latest Axelar block:',
      error.response && error.response.data ? error.response.data : error.message
    );
  }
}

module.exports = callRpcAxelar;
