import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="cont1">
      {children}
      <GrFormClose className="close" />
    </div>
  )
}

export default Notification
