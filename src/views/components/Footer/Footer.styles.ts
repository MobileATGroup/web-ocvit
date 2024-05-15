import { Font_Poppins } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "Footer",
})(theme => {
  return {
    root: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      backgroundColor: 'rgba(18, 18, 18, 1)',
    },
    containerFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 64px",
    },
    icLogo: {
        width: 194,
        height: 142,
    },
    contentColumn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 20,
        gap: 8
    },
    title: {
        fontFamily: Font_Poppins,
        fontSize: 18,
        fontWeight: 400,
        color: "rgba(171, 127, 82, 1)",
        lineHeight: "28px",
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        fontFamily: Font_Poppins,
        fontSize: 16,
        fontWeight: 400,
        color: "rgba(255, 255, 255, 1)",
        lineHeight: "24px",
        paddingLeft: 20,
    },
    contentInfoField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 64px",
    },
    contentInput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 4,
    },
    icStart: {
        width: 14,
        height: 14,
    },
    ButtonSend: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 16px",
        border: '2px solid rgba(255, 255, 255, 1)',
        borderRadius: 90,
        gap: 8,
    },
    textSend: {
        fontFamily: Font_Poppins,
        fontSize: 14,
        fontWeight: 400,
        color: "rgba(255, 255, 255, 1)",
        lineHeight: "24px",
    },
    icSend: {
        width: 24,
        height: 24,
    },
    input: {
        width: '25%',
    },
    textCoppy: {
        fontFamily: Font_Poppins,
        fontSize: 12,
        fontWeight: 400,
        color: "rgba(255, 255, 255, 1)",
        lineHeight: "20px",
        paddingTop: 72,
        paddingBottom: 24,
        textAlign: 'center',
        width: '100%',
        display: 'block',
    }
  }
})

export default useStyles
