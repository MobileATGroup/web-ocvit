import React, { useEffect } from "react";
import { dataProduct } from "./config";
import ShowProduct from "@/views/components/ShowProduct";
import useStyles from "./MainRight.styles";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { listCategory, listProduct } from "../config";

type propsMenuLeft = {
    selected?: number;
}
const MainRight = (props: propsMenuLeft) => {
    const { selected } = props;
    const { classes } = useStyles();
    const [dataCate, setDateCate] = React.useState<any>([]);
    const [dataCateTotal, setDateCateTotal] = React.useState<any>([]);
    const [dataProduct, setDataProduct] = React.useState<any>([]);
    const [countPage, setCountPage] = React.useState<number>(0);
    const [paging, setPaging] = React.useState<number | null>(0);

    useEffect(() => {
        listProduct().then((res) => {
            setDataProduct(res?.products)
        });
        listCategory().then((res) => {
            setDateCate(res?.categories)
            setDateCateTotal(res?.categories)
            setCountPage(res?.categories.length / res?.categories.length)
        })
    }, [])
    useEffect(() => {
        if (selected) {
            const dataCategory = dataCateTotal && dataCateTotal.filter((item: any) => item.id === selected)
            setDateCate(dataCategory)
        }
    }, [selected])

    const dataItemProduct = dataCate && dataCate?.map((item: any, index: number) => {
        return {
            dataItem: dataProduct.filter((items: any) => items.category_id === item.id),
            titleButton: item
        }
    })

    return (
        <div className={classes.root}>
            {dataItemProduct && dataItemProduct?.map((item: any, index: number) => (
                <ShowProduct key={index} data={item?.dataItem} titleButton={dataCate[index].name} />
            ))}
            <Stack spacing={2} className={classes.Pagination}>
                <Pagination
                    count={countPage}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                            onClick={() => setPaging(item.page)}
                        />
                    )}
                />
            </Stack>
        </div>
    )
}
export default MainRight;