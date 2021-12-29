import { Button, Menu } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import FeatherIcon from 'feather-icons-react'
const { SubMenu } = Menu
export default function SideNav() {
  const handleClick = () => {}
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className="sidenav"
    >
      <div className="logo">
        <span className="text">B.</span>
      </div>
      <Menu.ItemGroup className="menu-items">
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="home" />}
        >
          <span className="text">Dashboard</span>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="users" />}
        >
          <span className="text">My Team</span>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="briefcase" />}
        >
          <span className="text">Task</span>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="calendar" />}
        >
          <span className="text">Calendar</span>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="bar-chart" />}
        >
          <span className="text">Report</span>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          icon={<FeatherIcon size={16} icon="settings" />}
        >
          <span className="text">Settings</span>
        </Menu.Item>
      </Menu.ItemGroup>

      <div className="logout-div">
        <Button className="logout-button">
          <FeatherIcon size={14} icon="log-out" />
          <span className="text">Logout</span>
        </Button>
      </div>
    </Menu>
  )
}
