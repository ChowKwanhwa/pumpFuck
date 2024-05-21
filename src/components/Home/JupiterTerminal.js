// JupiterTerminal.js
import React, { useEffect } from 'react';

const JupiterTerminal = () => {
  useEffect(() => {
    if (!window.Jupiter || !window.Jupiter.init) {
      console.error("Jupiter Terminal script not loaded yet");
      return;
    }

    // Initialize Jupiter Terminal
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://api.mainnet-beta.solana.com",
      defaultExplorer: "Solscan",
      formProps: {
        fixedInputMint: true,
        initialInputMint: 'So11111111111111111111111111111111111111112',
        fixedOutputMint: true,
        initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        initialSlippageBps: 500,
      },
      strictTokenList: false,
      containerStyles: {},
    });

  }, []);

  return <div id="integrated-terminal"></div>;
};

export default JupiterTerminal;
