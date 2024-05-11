import { Font_Inter } from "@/assets/fonts"
import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "Header",
})(theme => {
  return {
    root: {
     height: '10%',
     width: '100%',
    },
    navbarLeft: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconLogo: {
        width: '112px',
        height: '86px', 
    },
    line: {
        width: '1px',
        height: '60%',
        backgroundColor: '#E6E8EC',
        margin: '0 20px',
        padding: '10px  0px'
    },
    button: {
        backgroundColor: '#F4DDA0',
        borderRadius: '20px',
        padding: '12px 20px',
        '&:hover': {
            backgroundColor: '#FFC107',
        },
        gap: 4,
    },
    text: {
        fontFamily: Font_Inter,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '20px',
        color: '#0C1828'
    },
    navbarRight: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 24,
        paddingRight: 64,
    },
    menuName: {
        fontFamily: Font_Inter,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '20px',
        color: '#808191',
        // padding: '0 16px',
        cursor: 'pointer',
        '&:hover': {
            color: '#FFC107',
        },
    },
    buttonCall: {
        backgroundColor: 'white',
        borderRadius: '90px',
        padding: '12px 16px',
        '&:hover': {
            backgroundColor: '#FFC107',
        },
        gap: 12,
        border: '2px solid #E6E8EC',
    },
    textPhone: {
        fontFamily: Font_Inter,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '16px',
        color: '#23262F'
    },
    iconShop: {
        width: '32px',
        height: '40px',
    }
  }
})

export default useStyles
