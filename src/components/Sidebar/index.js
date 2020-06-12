import React from 'react'
import Header from './Components/Header'
import Avatar from './Components/Avatar'
import CollapsableMenu from './Components/CollapsableMenu'

import {ReactComponent as DashboardIcon} from "../../assets/icons/mdi_dashboard.svg";
import {ReactComponent as CalenderIcon} from "../../assets/icons/mdi_calendar_today.svg";
import {ReactComponent as InboxIcon} from "../../assets/icons/inbox.svg";
import {ReactComponent as InvoicingIcon} from "../../assets/icons/mdi_account_balance_wallet.svg";
import {ReactComponent as TestIcon} from "../../assets/icons/mdi_colorize.svg";
import {ReactComponent as RightArrow} from "../../assets/icons/mdi_arrow_right_alt.svg";

import Menu from './Components/Menu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header/>
      <Avatar/>
      <div className="sidebar__menu-section">
        <CollapsableMenu Icon={DashboardIcon} name="Dashboard" subMenus = {["Page Visitor", "Post Performance", "Team Overall"]}/>
        <Menu Icon={CalenderIcon} name="Calender"/>
        <Menu Icon={InboxIcon} name="Inbox"/>
        <Menu Icon={InvoicingIcon} name="Invoicing"/>
        <Menu Icon={TestIcon} name="Lab/Experiment"/>
      </div>
      <div className="sidebar__recents">
        <div className="sidebar__recents__header">
          RECENTLY VIEWED
        </div>
        <div className="sidebar__recents__links">
          <p>
            Overall Performance
          </p>
          <RightArrow />
        </div>
        <div className="sidebar__recents__links">
          <p>
            Invoice #940
          </p>
          <RightArrow />
        </div>
        <div className="sidebar__recents__links">
          <p>
            Customer: Minerva Viewer
          </p>
          <RightArrow />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
