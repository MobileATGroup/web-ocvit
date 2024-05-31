/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid } from "@mui/material"
import useStyles from "./Home.styles"
import React, { useState } from "react"
import { observer } from "mobx-react"
import Header from "../components/Header"
import SliderImage from "@/components/SliderImage"
import { dataImage } from "./config"
import MainLeft from "./MainLeft"
import MainRight from "./MainRight"
import Footer from "../components/Footer"

type MenuLeftType = {
  childrenChild?: React.ReactNode
}

const Home = (props: MenuLeftType) => {
  const { childrenChild, ...rest } = props
  const { classes, cx } = useStyles()
  const [selected, setSelected] = useState<number>()

  return (
    <div className={cx(classes.root)}>
      <Header />
      <div className={classes.main}>
        <div className={classes.containerBanner}>
          <SliderImage images={dataImage} />
          <div className={classes.container}>
            <span className={classes.title}>Giao Hàng Toàn Quốc</span>
            <span className={classes.text}>Miễn Phí Vận Chuyển Nội Thành Hà Nội</span>
            <div className={classes.containerButon}>
              <Button className={classes.contentButon}>Hotline: 0918 996 390</Button>
            </div>
          </div>
        </div>
        <Grid container className={classes.bodyMain}>
          <Grid item xs={2} sm={2}>
            <MainLeft setSelected={setSelected}/>
          </Grid>
          <Grid item xs={10} sm={10}>
            <MainRight selected={selected}/>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default observer(Home)
