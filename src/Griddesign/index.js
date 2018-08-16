import React from "react";
import {Grid} from "@material-ui/core";

export class Sample extends React.Component {
  render(){
    return(
      <Grid container>
        {/* テスト1 */}
        <Grid container>
          <Grid item xs={4}>
            test
          </Grid>
          <Grid item xs={4}>
            test
          </Grid>
          <Grid item xs={4}>
            test
          </Grid>
        </Grid>

        {/* テスト2 */}
        <Grid container>
          <Use1 text="hoge"/>
          <Use1 text="hoge"/>
          <Use1 text="fuga"/>
          <Use1 text="fuga"/>
          <Use1 text="hoge"/>
          <Use1 text="hoge"/>
        </Grid>

        {/* テスト3 */}
      </Grid>
    )
  }
}

// この程度ならわかりやすい範疇
function Use1(props){
  return(<Grid xs="2">{props.text}</Grid>)
}