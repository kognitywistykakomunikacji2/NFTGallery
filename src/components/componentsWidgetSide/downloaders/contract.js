import { Alchemy } from "alchemy-sdk";

const contractDownloader = (contract, apiKey, network) => {
    const apikey = apiKey;
    const settings = {
        apiKey: apikey,
        network: network,
    };
    const alchemy = new Alchemy(settings);
    const response = alchemy.nft.getNftsForContract(contract)
        .then(res => res.nfts);
    return response;

}
export default contractDownloader