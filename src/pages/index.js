import * as React from "react"
import { withStyles } from '@material-ui/core';
import { styles } from '../styles/customStyles.js';

import NavBar from "../components/navbar"
import Seo from "../components/seo"

const IndexPage = ({classes}) => (
  <div className={classes.main}>
      <NavBar/>
      <Seo title="About" />
        <h1>Daily Cal Projects</h1>
    </div>
)

export default withStyles(styles)(IndexPage)
