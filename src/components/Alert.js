//short cut rfce
import React from 'react';

export default function Alert(props) 
{
  return (
  props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`}role="alert">
  <strong>{props.Alert.type}</strong>{props.Alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span> 
  </button>
  </div>
  )
}
/* if else type of statement...works only if props.Alert is not null*/

