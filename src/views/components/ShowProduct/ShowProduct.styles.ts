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
    containerProduct: {
      display: "flex",
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      // backgroundColor: 'rgba(255, 255, 255, 1)'
      gap: 30,
      paddingBottom: 24,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
        overflow: "hidden",
        width: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 30,
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.045)',
        paddingBottom: 24,
    },
    img: {
        minWidth: '241px',
        height: '170px',
    },
    title: {
        fontFamily: Font_Poppins,
        fontSize: 18,
        fontWeight: 500,
        lineHeight: "24px",
        color: 'rgba(17, 20, 45, 1)',
        paddingLeft: 24,
        paddingRight: 24,
    },
    describe: {
        fontFamily: Font_Poppins,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: "16px",
        color: 'rgba(17, 20, 45, 1)',
        paddingLeft: 24,
        paddingRight: 24,
    },
    contact: {
        fontFamily: Font_Poppins,
        fontSize: 13,
        fontWeight: 700,
        lineHeight: "18px",
        color: 'rgba(124, 97, 0, 1)',
        backgroundColor: 'rgba(216, 194, 114, 0.1)',
        borderRadius: '4px',
        padding: '8px 32px',
        alignSelf: 'center',
    },
    contentCateGory: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingBottom: 48,
    },
    CateGory: {
        fontFamily: Font_Poppins,
        fontSize: 13,
        fontWeight: 700,
        lineHeight: "18px",
        color: 'rgba(0, 0, 0, 0.8)',
        padding: '18px 12px',
        backgroundColor: 'rgba(244, 221, 160, 1)',
        borderRadius: '20px',
    },
    contentLoadMore: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: 24,
    },
    loadMore: {
        fontFamily: Font_Poppins,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: "20px",
        color: 'rgba(17, 20, 45, 1)',
        padding: '18px 43px',
        backgroundColor: 'rgba(228, 228, 228, 0.5)',
        borderRadius: '20px',
    }
  }
})

export default useStyles
