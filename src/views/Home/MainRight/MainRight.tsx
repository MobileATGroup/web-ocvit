import React from "react";
import { dataProduct } from "./config";
import ShowProduct from "@/views/components/ShowProduct";
import useStyles from "./MainRight.styles";

const MainRight = () => {
    const {classes} = useStyles();
    return (
        <div className={classes.root}>
            {dataProduct.map((item: any, index) => (
                <ShowProduct key={index} data={item?.dataItem} />
            ))}
        </div>
    )
}
export default MainRight;