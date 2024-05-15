import React from "react";
import useStyles from "./Footer.styles";
import AppSvgIcon from "@/components/AppSvgIcon";
import { ReactComponent as icLogo } from "@/assets/icons/logo.svg";
import { dataFooter } from "./Config";
import { Button, TextField } from "@mui/material";
import {ReactComponent as icStart} from "@/assets/icons/start.svg";
import {ReactComponent as icSend} from "@/assets/icons/small_circle_button.svg";

const Footer = () => {
    const { classes, cx } = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.containerFooter}>
                <AppSvgIcon component={icLogo} className={classes.icLogo} />
                {dataFooter.map((item, index) => (
                    <div className={classes.contentColumn} key={index}>
                        <span className={classes.title}>{item.title}</span>
                        {item.list.map((item2, index2) => (
                            <span className={classes.text} key={index}>{item2.title}</span>
                        ))}
                    </div>
                ))}
            </div>
            <div className={classes.contentInfoField}>
                <TextField
                    label={
                        <div className={classes.contentInput}>
                            <span className={classes.text}>Your Name</span>
                            <AppSvgIcon component={icStart} className={classes.icStart} />
                        </div>

                    }
                    variant="standard"
                    color="warning"
                    focused
                    className={classes.input}
                />
                <TextField
                    label={
                        <div className={classes.contentInput}>
                            <span className={classes.text}>Your Email</span>
                            <AppSvgIcon component={icStart} className={classes.icStart} />
                        </div>

                    }
                    variant="standard"
                    color="warning"
                    focused
                    className={classes.input}
                />
                <TextField
                    label={
                        <div className={classes.contentInput}>
                            <span className={classes.text}>Phone Number</span>
                            <AppSvgIcon component={icStart} className={classes.icStart} />
                        </div>

                    }
                    variant="standard"
                    color="warning"
                    focused
                    className={classes.input}
                />
                <Button className={classes.ButtonSend}>
                    <span className={classes.textSend}>Send</span>
                    <AppSvgIcon component={icSend} className={classes.icSend} />
                </Button>
            </div>
            <span className={classes.textCoppy}>© 2021 Grand Villa. All Rights Reserved.</span>
        </div>
    );
};
export default Footer;