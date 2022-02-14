import React from 'react';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';


function GoBackButton() {
  const history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  }

  return (
    <IconButton onClick={goToPreviousPath}><ArrowBackIcon /></IconButton>
  )
}

export default GoBackButton;