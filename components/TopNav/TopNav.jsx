import FeatherIcon from 'feather-icons-react'
import { Typography, Menu, Dropdown, Image } from 'antd'
import { DownOutlined } from '@ant-design/icons'
export default function TopNav() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item itemType="danger" key="3">
        Logout
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="top-section">
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <div className="end-section">
        <FeatherIcon size={25} className="item" icon="search" />
        <FeatherIcon size={25} className="item" icon="bell" />
        <Dropdown className="item" overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img
              id="profile-image"
              src="https://s3-alpha-sig.figma.com/img/4f09/1a93/d974c1bd7a09e54480f755c811373a3a?Expires=1641772800&Signature=D6kevwmymqBCTKE-~veZMx6lQb~jFbfDeLWwKz4xSPURL~JclVpDJyz0eGmYWwoYK4woGYzouWJFXJOubOOMIBSJBMwk~01EmWxpPYJ58aXVA3ObdqYVU9DsBcTKyhb5KFG9nvhEUBydnT1TiPxaLjtolIVpBfF1AkIxArf3y3egic8ku9CiK2m3XgBGIEjfBiNTD-wLBp25gjRl3HjIYsR~7yL~uCQXCaBtBfeQhENL4xuktvYn5SRRidXFmudbeFZCN4b8xKcfKrmGWbiCePfMbbjAreMSGl-Y--7zFO1SIIL3UU~ZJrMR-uGvYTviKnluneL52NIni1oEDcEobg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />{' '}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
