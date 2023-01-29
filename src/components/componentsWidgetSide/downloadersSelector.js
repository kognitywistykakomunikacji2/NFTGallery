import bothDownloader from './downloaders/downloadByContractAndOwner';
import ownerDownloader from './downloaders/owner';
import contractDownloader from './downloaders/contract';


const selector = (owner, contract, apiKey, network) => {
    if (owner && contract) {
        return bothDownloader(owner, contract, apiKey, network);
    }
    else if (owner) {
        return ownerDownloader(owner, apiKey, network);
    }
    else if (contract) {
        return contractDownloader(contract, apiKey, network);
    }
    else {
        console.error("Nie podano ownera ani kontraktu");
        return;
    }
}

export default selector;