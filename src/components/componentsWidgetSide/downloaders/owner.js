import { Alchemy } from "alchemy-sdk";

const OwnerDownloader = (owner, apiKey, network) => {
    const apikey = apiKey;
    const settings = {
        apiKey: apikey,
        network: network,
    };
    const alchemy = new Alchemy(settings);
    const response = alchemy.nft.getNftsForOwner(owner).then(res => res.ownedNfts);
    return response;
}
export default OwnerDownloader