import { Font_Poppins } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "ShowProduct",
})(theme => {
  return {
    root: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      backgroundColor: 'white',
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
    },
    img: {
        minWidth: '241px',
        minHeight: '170px',
    },
    title: {
        fontFamily: Font_Poppins,
        fontSize: 18,
        fontWeight: 500,
        lineHeight: "24px",
        color: 'rgba(17, 20, 45, 1)',
    },
    describe: {
        fontFamily: Font_Poppins,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: "16px",
        color: 'rgba(17, 20, 45, 1)',
    }
  }
})

export default useStyles
