import { Font_Poppins } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "home",
})(theme => {
  return {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
      backgroundColor: 'white',
    },
    containerBanner: {
      width: "100%",
      height: "auto",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
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
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 32,
    },
    contentButon: {
      backgroundColor: 'rgba(244, 221, 160, 1)',
    },
    main: {
      width: "100%",
      height: "100%",
      overflow: "auto",
    },
    bodyMain: {
      width: "100%",
      height: "100%",
      backgroundColor: 'red',
      position: "relative",
      display: "flex",
      padding: '58px 24px'
    }
  }
})

export default useStyles
