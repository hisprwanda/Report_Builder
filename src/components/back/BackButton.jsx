import React from 'react'
import { Button } from '@dhis2-ui/button'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



const BackButton = (props) =>{

  const linkTo = props.linkTo
  const buttonLabel = props.btnLabel
  return (
    <div className="main-back-btn" >
      <Button name="Basic button" value="default" >
        <Link to={linkTo} style={{textDecoration:'none'}}>
          {'< '} {buttonLabel}
        </Link>
      </Button>
    </div>
  )
}

BackButton.defaultProps = {
  linkTo: "/",
  btnLabel: 'Go Back'
}

export default BackButton