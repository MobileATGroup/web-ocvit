/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import useStyles from "./MainLeft.styles";
import { dataMenuLeft } from "../config";
import DropDown from "@/components/DropDown";
import AppSvgIcon from "@/components/AppSvgIcon";
import { ReactComponent as icPhone } from "@/assets/icons/Phone.svg";

const MainLeft = () => {
    const { classes } = useStyles();
    const [selected, setSelected] = React.useState<number>();
    const [selectedItem, setSelectedItem] = React.useState<number>();
    const handleOnclickDropDown = (index: number) => {
        if (selected === index) {
            setSelected(undefined);
        }
        else {
            setSelected(index);
        }
    }
    const handleClickItem = (index: number) => {
        setSelectedItem(index)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <span className={classes.title}>Danh Mục Sản Phẩm</span>
                <div className={classes.containerButon}>
                    {dataMenuLeft.map((item, index) => (
                        <div key={index} className={classes.contentButon}>
                            <DropDown
                                key={index}
                                title={item.title}
                                index={index}
                                handleOnclickDropDown={handleOnclickDropDown}
                            />
                            {selected === index && item.dataDropDown && item.dataDropDown.map((items, index2) => (
                                <li
                                    key={index2}
                                    onClick={() => handleClickItem(index2)}
                                    className={classes.listItem}>{items.title}</li>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={classes.line} />
                <span className={classes.title}>Tư Vấn Hỗ Trợ</span>
                <div className={classes.containerService}>
                    <div className={classes.containerContact}>
                        <AppSvgIcon component={icPhone} className={classes.icon} />
                        <div className={classes.contentContact}>
                            <span className={classes.text1}>0916 998 390 (Mr Hậu)</span>
                            <span className={classes.text1}>0945 751 712 (Mr Đức)</span>
                            <span className={classes.text2}>gọi để được tư vấn trực tiếp</span>
                        </div>
                    </div>
                    <img src='/image/shipper.png' alt="shipper" className={classes.imgShipper} />
                </div>
                <div className={classes.line} />
                <span className={classes.title}>Về Chúng Tôi</span>
                <div className={classes.containerService}>
                    <div className={classes.containerContact}>
                        <img src='/image/avartar.png' className={classes.icon} />
                        <div className={classes.contentContact}>
                            <span className={classes.text1}>Công ty TNHH Đầu.</span>
                            <span className={classes.text3}>Công ty TNHH Đầu tư Thương Mại HK Việt Nam –.</span>
                        </div>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/k6kaTn-9jwU?si=4lLDZSkd_r05eW56"
                        className={classes.imgShipper}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className={classes.line} />
                <span className={classes.title}>Tin Doanh Nghiệp</span>
                <div className={classes.containerService}>
                    <div className={classes.containerContact}>
                        <img src='/image/avartar.png' className={classes.icon} />
                        <div className={classes.contentContact}>
                            <span className={classes.text1}>Công ty TNHH Đầu.</span>
                            <span className={classes.text3}>Công ty TNHH Đầu tư Thương Mại HK Việt Nam –.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MainLeft;