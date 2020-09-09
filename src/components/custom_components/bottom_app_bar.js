import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "5%",
    color: "#64ffda",
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  return (
    <AppBar
      position="sticky"
      className={classes.appBar}
      style={{ background: "#0a192f" }}
    >
      <Toolbar>
        <Typography style={{ display: "block", margin: "auto", padding: 0 }}>
          <Box textAlign="center" m={1}>
            updated : {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
