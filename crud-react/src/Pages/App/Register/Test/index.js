import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';

import Tabela from '../../../Tabela';
import { useParams } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import { Grid } from '@material-ui/core';
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector, useDispatch } from 'react-redux';
import { apiRoutes } from '../../../../Api';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import StarRateIcon from '@material-ui/icons/StarRate';
import "./styles.css";
import Button from '@material-ui/core/Button';
import {
    setInitialState,
    findProductById,
    findRatingByProductId,
    findProductImagesById
} from '../../../../store/ducks/todos';
import Divider from '@material-ui/core/Divider';
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from "react-share";
import { grid } from '@material-ui/system';
export default function Test() {
    const dispatch = useDispatch();

    let { productId } = useParams();

    useEffect(() => {
        dispatch(setInitialState());
        dispatch(findProductById(apiRoutes.PRODUCTS, productId));
        // dispatch(findProductImagesById(apiRoutes.PRODUCTS+'/main_images',productId));

        dispatch(findRatingByProductId(apiRoutes.RATING, productId));
console.log(SelectedProduct)
    }, []);

    const { SelectedProduct,main_imagens,adtional_images, last_ratings } = useSelector(
        state => state.todos
    );


    console.log('adtional_images', adtional_images)


    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={2} ></Grid>

                <Grid item xs={4} >
                    <AliceCarousel
                        showSlideIndex={true}
                    >

                        {/* <img src="https://disottimodamasculina.com.br/wp-content/uploads/2019/01/disotticapa3.png" />
                        <img src="https://disottimodamasculina.com.br/wp-content/uploads/2019/01/disotticapa3.png" /> */}
                   
                        {adtional_images.map(imagem2 => (
                        <img className="photo2" src={"data:image/png;base64,"+imagem2} alt="Red dot" />
                        ))
                    }
                    {/* {SelectedProduct.imagens.map(imagem => (
                        <img src={"data:image/png;base64,"+imagem} alt="Red dot" />
                        ))
                    } */}
                       
                    </AliceCarousel>
                </Grid>

                <Grid item xs={4} >
                    <Typography gutterBottom component="subtitle1">
                        {SelectedProduct.information.name}
                    </Typography>




                    <Grid item xs={6}>
                        <Rating precision={0.5} name="read-only" value={parseFloat(SelectedProduct.information.rating)} readOnly />
                        {SelectedProduct.information.rating} / 5 --- {SelectedProduct.information.totalRatings} Reviews

                       </Grid>











                    <Divider />


                    <Typography gutterBottom variant="headline" component="h2">
                        Price: {SelectedProduct.information.price}
                    </Typography>




                    <Typography gutterBottom component="h2">
                        Shipping: {SelectedProduct.information.shipping}
                    </Typography>

                    <Typography gutterBottom component="h2">
                        {SelectedProduct.information.sales} vendidos
                  </Typography>
                    <Divider />

                    <Link to={SelectedProduct.information.store_link}>
                        <Typography component="h2">
                            Store: {SelectedProduct.information.store_name}
                        </Typography>

                    </Link>
                    <Typography component="h2">
                        Fone number: {SelectedProduct.details.fone}
                    </Typography>

                    <Typography component="h2">
                        Mail Adress: {SelectedProduct.details.mail}
                    </Typography>

                    <Divider />
                    <Button variant="contained" color="primary">
                        Favoritar
                    </Button>



                </Grid>
                <Grid item xs={1} >
                    <div>
                        <img className="photo" src="https://ae01.alicdn.com/kf/Ha92afc661dfb451389ab4bb282009f11S.jpg_220x220q90.jpg" />
                        <Typography component="h2">
                            R$: {SelectedProduct.information.price}
                        </Typography>
                    </div>
                    <div>
                        <img className="photo" src="https://ae01.alicdn.com/kf/Ha92afc661dfb451389ab4bb282009f11S.jpg_220x220q90.jpg" />
                        <Typography component="h2">
                            R$: {SelectedProduct.information.price}
                        </Typography>
                    </div>
                    <div>
                        <img className="photo" src="https://ae01.alicdn.com/kf/Ha92afc661dfb451389ab4bb282009f11S.jpg_220x220q90.jpg" />
                        <Typography component="h2">
                            R$: {SelectedProduct.information.price}
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            {/* <img src={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
        /> */}


            <Grid container spacing={0}>
                <Grid item xs={4} ></Grid>

                <Grid item xs={6} >
                    <Typography gutterBottom component="subtitle2">
                        {SelectedProduct.information.name}
                        <br></br>
                    </Typography>
                    <Typography gutterBottom component="subtitle2">
                        {SelectedProduct.details.description}
                    </Typography>
                    {/* <Typography gutterBottom component="subtitle2">
                        {SelectedProduct.details.}
                    </Typography>  src="https://ae01.alicdn.com/kf/Ha92afc661dfb451389ab4bb282009f11S.jpg_220x220q90.jpg" />*/}
                    <div>
                    {main_imagens.map(imagem => (
                        <img className="photo2" src={"data:image/png;base64,"+imagem} alt="Red dot" />
                        ))
                    }
                    </div>


                    <Grid item xs={6}>
                        Customer Reviews ({SelectedProduct.information.totalRatings})
                    </Grid>

                    <Grid class="rating" item xs={6}>
                        <Rating precision={0.5} name="read-only" value={parseFloat(SelectedProduct.information.rating)} readOnly />
                        {SelectedProduct.information.rating} / 5 --- {SelectedProduct.information.totalRatings} Reviews

                    </Grid>
                    <Divider />


                    <List >
                        
                        {last_ratings.map(row => (
                            
                            <React.Fragment>
                                <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            {row.user}                
                                        </Grid>
                                        <Grid  item xs={9}>                    
                                            {row.description}
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Rating precision={0.5} name="read-only" value={parseFloat(row.rate)} readOnly />
                                        </Grid>
                                        
                                        <Grid  item xs={9}>                    
                                            {row.date}
                                        </Grid>
                                    </Grid>
                            <Divider />

                            </React.Fragment>
                        ))}                        
                    </List >




                </Grid>

                <Grid item xs={1} >



                    <div className="Demo__some-network">
                        <FacebookShareButton
                            // url={shareUrl}
                            // quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </div>

                    <div className="Demo__some-network">
                        <PinterestShareButton
                            // url={shareUrl}
                            // quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <PinterestIcon size={32} round />
                        </PinterestShareButton>
                    </div>

                    <div className="Demo__some-network">
                        <TwitterShareButton
                            // url={shareUrl}
                            // quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </div>
                    <div className="Demo__some-network">
                        <WhatsappShareButton
                            // url={shareUrl}
                            // quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </div>

                </Grid>
            </Grid>


            <Tabela />




        </>

    );
}
