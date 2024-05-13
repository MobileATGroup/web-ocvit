/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import React from 'react';
import useStyles from './SliderImage.styles';
import AppSvgIcon from '../AppSvgIcon';
import { ReactComponent as iconPrev } from '@/assets/icons/iconPrev.svg';
import { ReactComponent as iconNext } from '@/assets/icons/iconNext.svg';
import { clear } from 'console';
import { Button } from '@mui/material';

type propsType = {
    images: any[]
    normalImage?: boolean
    contentData?: any[]
}
type propsButtonNext = {
    className: string
    style?: boolean
    onClick?: () => void;
}
const SampleNextArrow = (props: propsButtonNext) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ display: "block", right: 32, width: 48, height: 56 }}
        >
            <style >{`
                .slick-prev:before, .slick-next:before{
                    font-size: 48px;
                }
            `}</style>
        </div>
    );
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ display: "block", left: 32, zIndex: 1, width: 48, height: 56, fontSize: 48 }}
        >
        </div>
    );
}

const SliderImage = (props: propsType) => {
    const { contentData, images, normalImage } = props;
    const { classes } = useStyles();

    const [currentSlider, setCurrentSlider] = React.useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow className={classes.buttonNext} />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots: any) => (
            <div className={classes.dots}
                style={{ display: "none" }}
            >
                <ul> {dots} </ul>
            </div>
        ),
        afterChange: (current: number) => {
            setCurrentSlider(current);
        }
    };
    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div  key={index} className={classes.containerSlider}>
                    <img src={image.path} alt="image" className={classes.img}/>
                    
                </div>
            ))}

        </Slider>
    )
}
export default SliderImage;