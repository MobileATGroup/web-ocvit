import React from 'react';
import useStyles from './ShowProduct.styles';
import { Button } from '@mui/material';

type dataProduct = {
    data: any[]
}
const ShowProduct = (props: dataProduct) => {
    const { classes } = useStyles();
    const { data } = props;
    console.log('data', data);
    return (
        <div className={classes.root}>
            <div className={classes.contentCateGory}>
                <Button className={classes.CateGory}>BU LÔNG LỤC GIÁC CHÌM</Button>
            </div>
            <div className={classes.containerProduct}>
                {data?.map((item, index) => (
                    <div key={index} className={classes.container}>
                        <img src={item.image} alt="product" className={classes.img} />
                        <span className={classes.title}>{item.title}</span>
                        <span className={classes.describe}>{item.describe}</span>
                        <Button className={classes.contact}>Liên Hệ</Button>
                    </div>

                ))}
            </div>
            <div className={classes.contentLoadMore}>
                <Button className={classes.loadMore}>Load More</Button>
            </div>
        </div>
    )
}
export default ShowProduct;