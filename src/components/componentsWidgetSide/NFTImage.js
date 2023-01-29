import React from 'react';
import styles from './NFTImage.module.scss';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const NFTImage = props => {
    const adress = props.imgUrl.split("/").splice(-2);
    return (
        <Zoom>
        <img
            className={styles.nftimage}
            src={`https://res.cloudinary.com/alchemyapi/image/upload/w_800,h_800/thumbnail/${adress[0]}/${adress[1]}`}
            alt={props.descritpion}
            loading="lazy" />
        </Zoom>
    )
};


export default NFTImage;