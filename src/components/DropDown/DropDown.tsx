import React from "react";
import AppSvgIcon from "../AppSvgIcon";
import {ReactComponent as iconDropDown} from "@/assets/icons/dropDown.svg";
import useStyles from "./DropDown.styles";

type DropDownType = {
    title: string
    dataDropDown?: any[]
    selected?: number
    handleOnclickDropDown?: (index: number) => void
    index?: number
}
const DropDown = (props : DropDownType) => {
    const {title, dataDropDown, selected, handleOnclickDropDown, index} = props;
    const {classes} = useStyles();
    return (
        <div className={classes.container} onClick={() =>handleOnclickDropDown && handleOnclickDropDown(index || 0) }>
            {/* <AppSvgIcon component={iconDropDown} className={classes.icon}/> */}
            <span className={selected === index ?classes.titleActive :classes.title}>{title}</span>
        </div>
    )
};
export default DropDown;