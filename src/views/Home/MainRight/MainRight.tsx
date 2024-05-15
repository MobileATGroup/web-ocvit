import React from "react";
import { dataProduct } from "./config";
import ShowProduct from "@/views/components/ShowProduct";
import useStyles from "./MainRight.styles";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainRight = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            {dataProduct.map((item: any, index) => (
                <ShowProduct key={index} data={item?.dataItem} />
            ))}
            <Stack spacing={2} className={classes.Pagination}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </div>
    )
}
export default MainRight;