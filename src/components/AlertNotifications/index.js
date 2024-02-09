import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="main-cont">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <div className="item">
        <AiFillCheckCircle className="success" />
        <div className="cont">
          <h1 className="head">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item">
        <RiErrorWarningFill className="fail" />
        <div className="cont">
          <h1 className="head1">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file.
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item">
        <MdWarning className="warning" />
        <div className="cont">
          <h1 className="head3">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item">
        <MdInfo className="info" />
        <div className="cont">
          <h1 className="head4">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
