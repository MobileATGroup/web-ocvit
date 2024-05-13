import React from "react";
import useStyles from "./MainLeft.styles";
import { dataMenuLeft } from "../config";
import DropDown from "@/components/DropDown";
const MainLeft = () => {
    const { classes } = useStyles();
    const [selected, setSelected] = React.useState<number>();
    const [selectedItem, setSelectedItem] = React.useState<number>();
    const handleOnclickDropDown = (index: number) => {
        if(selected === index){
            setSelected(undefined);
        }
        else{
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
                                onClick={()=>handleClickItem(index2)} 
                                className={classes.listItem}>{items.title}</li>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={classes.line} />
            </div>
        </div>
    )
};
export default MainLeft;