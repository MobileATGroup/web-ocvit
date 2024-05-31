import React from 'react';
import useStyles from './ShowProduct.styles';
import { Button } from '@mui/material';

type dataProduct = {
    data: any[];
    titleButton?: string;
}
const ShowProduct = (props: dataProduct) => {
    const { classes } = useStyles();
    const { data, titleButton } = props;
    const [visibleRows, setVisibleRows] = React.useState<number>(1);
    const handleLoadMoreData = () => {
        setVisibleRows(prevVisibleItems => prevVisibleItems + 1)
    }

    return (
        <div className={classes.root}>
            <div className={classes.contentCateGory}>
                <Button className={classes.CateGory}>{titleButton}</Button>
            </div>
            <div className={classes.containerProduct}>
                 {[...Array(visibleRows)].map((_, rowIndex) => (
                    <div key={rowIndex} className={classes.productRow}>
                        {data.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, index) => (
                            <div key={index} className={classes.container}>
                                <img src={item.image} alt="product" className={classes.img} />
                                <span className={classes.title}>{item.name}</span>
                                <span className={classes.describe}>{item.describe}</span>
                                <Button className={classes.contact}>Liên Hệ</Button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={classes.contentLoadMore}>
            {visibleRows * 4 < data.length && (
                <Button className={classes.loadMore} onClick={() => handleLoadMoreData()}>Load More</Button>
            )}
            </div>
        </div>
    )
}
export default ShowProduct;