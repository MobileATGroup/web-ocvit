import React from "react";
import useStyles from "./Header.styles";
import { Button, Grid } from "@mui/material";
import { ReactComponent as iconLogo} from '@/assets/icons/logo.svg';
import {ReactComponent as iconShop} from '@/assets/icons/shop.svg';
import AppSvgIcon from "@/components/AppSvgIcon";
import { dataHeader } from "./config";

const Header = () => {
    const {classes} = useStyles();
    const handleClick = (ref: string) => {
        console.log('ref: ', ref);
    }
    return (
       <Grid container className={classes.root}>
            <Grid item xs={3} className={classes.navbarLeft}>
                <AppSvgIcon component={iconLogo} className={classes.iconLogo}/>
                <div className={classes.line}/>
                <Button className={classes.button}>
                    <span className={classes.text}>Đặt Hàng Ngay</span>
                </Button>
            </Grid>
            <Grid item xs={9} className={classes.navbarRight}>
                {dataHeader.map((item, index) => (
                    <span key={index} onClick={() => handleClick(item.ref)} className={classes.menuName}>
                        {item.title}
                    </span>
                ))}
                <Button className={classes.buttonCall}>
                    <span className={classes.textPhone}>0918 996 390</span>
                </Button>
                <AppSvgIcon component={iconShop} className={classes.iconShop}/>
            </Grid>
        </Grid>
    );
    };
export default Header;