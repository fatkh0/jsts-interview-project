import React, { useState } from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Content from "./Content";
import Preloader from "../common/Preloader";
import Container from "../Container/Container";
import UserNotFoundErrorContainer from "../error-page/UserNotFoundErrorContainer";

const ContentContainer = (props: any) => {

  const [activeButton, setActiveButton] = useState(null)

  const makeContent = () => {

    if (props.errorCode === 4) return <UserNotFoundErrorContainer />

    return props.isFetching 
    ? <Preloader /> 
    : <Content activeButton={activeButton} setActiveButton={setActiveButton} {...props} />
  }

  return(
    <Container 
    component={() => makeContent()}/>
  ) 
}

const mapStateToProps = (state: any) => ({
  isFetching: state.userRepos.isFetchingRepos && state.userInfo.isFetchingData,
  userName: state.header.userName,
  isUserFound: state.userInfo.userData.login,
  errorCode: +state.userInfo.errorCode.toString()[0]
})

export default compose (
  connect (mapStateToProps, {})
) (ContentContainer)