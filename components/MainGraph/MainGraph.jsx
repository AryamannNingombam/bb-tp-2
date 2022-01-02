import { Typography, Dropdown, Menu } from 'antd'
import { Line } from 'react-chartjs-2'
import { UserOutlined } from '@ant-design/icons'
export default function MainGraph() {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="main-graph">
      <div className="text">
        <span className="first-section">Team Activities</span>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <span className="dots"></span>
        </Dropdown>
      </div>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          datasets: [
            {
              label: 'Team Activities',
              data: [50, 65, 55, 70, 47, 90],
              fill: false,
              borderColor: '#3954FF',
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: true,
              },
            },
          },
        }}
      />
    </div>
  )
}
