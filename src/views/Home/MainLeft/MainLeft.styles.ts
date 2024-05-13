import { Font_Poppins } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "MainLeft",
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
      position: "absolute",
      height: "100%",
      width: "100%",
    },
    title: {
      fontFamily: Font_Poppins,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "20px",
      color: 'rgba(26, 26, 26, 1)',
      padding: '0px 12px',
    },
    containerButon: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 32,
      gap: 8,
      '& li': {
        textAlign: 'left',
        width: '100%',
        padding: '0px 32px',
        }
    },
    contentButon: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // paddingTop: 32,
      // gap: 8,
      // '& li': {
      //   textAlign: 'left',
      //   width: '100%',
      //   padding: '0px 32px',
      //   }
    },
    line: {
      width: "50%",
      height: 1,
      backgroundColor: 'rgba(216, 216, 216, 1)',
      textAlign: "center",
      alignSelf: "center",
      margin: '32px 0px'
    },
    listItem: {
      fontFamily: Font_Poppins,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "20px",
      color: 'rgba(26, 26, 26, 1)',
      padding: '12px 0px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(216, 216, 216, 0.2)',
      }
    }
  }
})

export default useStyles
