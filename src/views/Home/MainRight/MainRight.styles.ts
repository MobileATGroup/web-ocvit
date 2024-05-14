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
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
    },
  }
})

export default useStyles
