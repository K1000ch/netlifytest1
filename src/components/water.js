import React from "react"
import waterStyle from "../css/components/water.module.css"

export default () => (
  <div className={waterStyle.wrap}>
    <h2 className={waterStyle.text}>Water</h2>
    <div className={waterStyle.circle1}></div>
    <div className={waterStyle.circle1}></div>
  </div>
)