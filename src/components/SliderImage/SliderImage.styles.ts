import { Font_Poppins } from "@/assets/fonts"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "SliderImage",
})(theme => {
  return {
    root: {
      [theme.breakpoints.down("md")]: {
       
      }
    },
    buttonNext: {
      right: 0, 
      width: 48,
      height: 56, 
      '& :before': {
        fontSize: 48
      }
    },
    dots: {
      display: "block",
    },
    img: {
      width: "100%"
    },
    containerSlider: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      backgroundColor: 'red',
      height: "100%",
      width: "100%",
    },
    title: {
      fontFamily: Font_Poppins,
      fontSize: 48,
      fontWeight: 700,
      lineHeight: "72px",
      color: 'white',
    },
    text: {
      fontFamily: Font_Poppins,
      fontSize: 32,
      fontWeight: 400,
      lineHeight: "48px",
      color: 'white',
    },
    containerButon: {

    },
    contentButon: {

    }
  }
})

export default useStyles
