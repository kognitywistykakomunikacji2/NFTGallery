import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';

import Selector from './downloadersSelector';
import NFTImage from './NFTImage';



const Gallery = props => {

    const [nftList, setNftList] = useState([]);
    const [nftDescription, setNftDescription] = useState([]);

    const nftDownloader = (owner, contract, apiKey, network) => {
        const imgUrl = Selector(owner, contract, apiKey, network);
        imgUrl.then(res => {
            const urlsOfNft = [];
            const altsOfNft = [];
            res.forEach(e => {
                urlsOfNft.push(e.media[0].gateway)
                altsOfNft.push(e.description)
            });

            setNftList(urlsOfNft);
            setNftDescription(altsOfNft);
        })
    }

    useEffect(() => {
        nftDownloader(props.owner, props.contract, props.apiKey)
    }, [props.owner, props.contract, props.apiKey, props.network]);

    const visibleNfts = nftList.map((url, index) =>
        <NFTImage
            imgUrl={url}
            descritpion={nftDescription[index]}
        />)

    return (
        <div
            className={styles.gallery}
        >
            {visibleNfts}
        </div>
    )
};


// Gallery.defaultProps = { 
//     owner: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', 
//     contract: ' 0x3d899e0ce7ce47888d86595b5f7254efb53fa4db', 
//     apiKey: 'YiqJjCfUskoY72wxeRwTf4Eh3oroWfIH', 
//     numberOfImages: '3', 
//     network: 'ETH_MAINNET' };

export default Gallery;