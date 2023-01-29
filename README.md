# final-project-2 nftgallery

NFTGallery widget/library for [React](https://reactjs.org).

Features:

* displays NFT gallery depending on smart contract, network, apikey, owner
* that's it I guess


## Quickstart

```bash
npm install --save final-project-2
```

```javascript
import React from 'react'
import Gallery from 'final-project-2'

export const MyImg = () => (
  <Gallery
    owner={'YOUR_OWNER_KEY'}
    contract={'YOUR_CONTRACT_KEY'}
    apiKey={'YOUR_API_KEY'}
    numberOfImages={numberOfImages}
    network={'ETH_MAINNET'}
    />
)
```

## Good luck making it work