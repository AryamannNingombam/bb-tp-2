import { Typography, Dropdown, Menu } from 'antd'
import { Bar, Line } from 'react-chartjs-2'
import { UserOutlined } from '@ant-design/icons'
export default function BarGraph() {
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
    <div className="bar-graph">
      <div className="text">
        <span className="first-section">Team Activities</span>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <span className="dots"></span>
        </Dropdown>
      </div>
      <Bar
        className="graph"
        options={{
          maintainAspectRatio: false,
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
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              barThickness: 7,
              label: 'Recieved',
              data: [65, 59, 80, 81, 56, 55],
              backgroundColor: '#3954FF',
              borderWidth: 0,
            },
            {
              barThickness: 7,
              label: 'Completed',
              data: [34, 23, 56, 41, 12, 23],
              backgroundColor: '#FFD339',
              borderWidth: 0,
            },
          ],
        }}
      />
    </div>
  )
}
