import { Font_Poppins } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "DropDown",
})(theme => {
  return {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        cursor: "pointer",
    },
    title: {
        fontFamily: Font_Poppins,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: "20px",
        color: 'rgba(128, 129, 145, 1)',
        padding: '0px 16px',
    },
    titleActive: {
      fontFamily: Font_Poppins,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "20px",
      color: 'rgba(244, 221, 160, 1)',
      padding: '0px 16px',
    },
    icon: {
      width: 24,
      height: 24,
      fill: 'none',
    }
  }
})

export default useStyles
