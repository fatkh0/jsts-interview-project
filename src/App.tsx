import React from 'react';
import HeaderContainer from "./components/header/HeaderContainer";
import ContentContainer from "./components/content/ContentContainer"
import {makeStyles} from "@material-ui/styles";
import Container from "./components/Container/Container";
import { connect } from 'react-redux';

const useStyles = makeStyles({
  app: {
    background: '#f5f8fa',
    width: '100%',
    fontFamily: ' "Farfetch Basis","Helvetica Neue",Arial,sans-serif',
  }
})

function App(props: any) {
  const classes = useStyles()
  
  return (
    <div className={classes.app}>
      <Container component={() => <HeaderContainer />} />
       <ContentContainer />
    </div>
  );
}

export default App

