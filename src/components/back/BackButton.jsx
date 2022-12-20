import React from 'react'
import { Button } from '@dhis2-ui/button'
import { Link } from 'react-router-dom'

function BackButton() {
  const linkTo = '/'
  const buttonLabel = 'Back to App Home'
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

export default BackButton