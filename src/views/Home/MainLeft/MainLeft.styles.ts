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
      position: "relative",
      height: "100%",
      width: "100%",
      overflow: "hidden",
    },
    title: {
      fontFamily: Font_Poppins,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "20px",
      color: 'rgba(26, 26, 26, 1)',
      padding: '0px 12px',
      width: '100%',
      display: 'block',
    },
    containerButon: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 8,
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
    },
    containerService: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 16,
      padding: '8px 12px',
    },
    containerContact: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    icon: {
      width: 67,
      height: 67,
    },
    contentContact: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 4,
    },
    text1: {
      fontFamily: Font_Poppins,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "24px",
      color: 'rgba(70, 70, 70, 1)',
    },
    text2: {
      fontFamily: Font_Poppins,
      fontSize: 8,
      fontWeight: 500,
      lineHeight: "12px",
      color: 'rgba(128, 128, 128, 1)',
    },
    imgShipper: {
      width: '100%',
      height: 'auto',
    },
    text3: {
      fontFamily: Font_Poppins,
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "24px",
      color: 'rgba(17, 20, 45, 1)',
    }
  }
})

export default useStyles
