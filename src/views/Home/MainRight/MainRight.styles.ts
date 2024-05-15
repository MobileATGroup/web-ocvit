import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "MainRight",
})(theme => {
  return {
    root: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
    },
    Pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
})

export default useStyles
