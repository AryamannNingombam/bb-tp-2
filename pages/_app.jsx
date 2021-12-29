import '../app.scss'
import SideNav from '../components/SideNav/SideNav'
import { Layout, Menu, Breadcrumb, Typography } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Content, Sider } = Layout
function MyApp({ Component, pageProps }) {
  return (
    <div className="main-div" style={{ padding: '24px 0' }}>
      <SideNav />
      <Content className="content">
        <div className="top-section">
          <Typography.Title level={3}>Dashboard</Typography.Title>
        </div>
      </Content>
    </div>
  )
}

export default MyApp
