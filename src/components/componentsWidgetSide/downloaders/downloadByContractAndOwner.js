import { Alchemy } from "alchemy-sdk";

const OwnerDownloader = (owner, contract, apiKey, network) => {

    const apikey = apiKey;
    const settings = {
        apiKey: apikey,
        network: network,
    };
    const alchemy = new Alchemy(settings);
    const response = alchemy.nft.getNftsForOwner(owner)
        .then(res => res.ownedNfts)
        .then(res => res.filter(nft => nft.contract.address === contract))
    return response;
}
export default OwnerDownloader