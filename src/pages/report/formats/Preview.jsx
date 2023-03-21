import React from 'react'
import BackButton from '../../../components/back/BackButton'


const eventsQuery = {
    indicators: {
      "indicators": {
          "resource": "analytics/dataValueSet.json",
          "params": {
              "dimension": ["dx:FnYCr2EAzWS;n5nS0SmkUpq;i7WSgSJpnfu", "pe:THIS_MONTH", "ou:DiszpKrYNg8"]
          }
      }
    }
}


function Preview() {
  return (
    <div>
        <BackButton />
        Preview Report Content will go below....

    </div>
  )
}

export default Preview