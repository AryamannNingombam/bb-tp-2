import { Typography } from 'antd'
import { ArcElement, Chart } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
Chart.register(ArcElement)

export default function Stats({ text, color, percentage, title, number }) {
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
    <div className="stats-div">
      <div className="section">
        <Typography.Title level={5}>{title}</Typography.Title>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <span className="dots"></span>
        </Dropdown>
      </div>
      <div className="section">
        <Doughnut
          className="chart"
          data={{
            labels: ['Completed', 'Incomplete'],
            datasets: [
              {
                label: 'Progress Chart',
                data: [100 - percentage, percentage],
                backgroundColor: ['rgba(255,255,255)', color],
                borderWidth: 0.2,
              },
            ],
          }}
          options={{
            responsive: true,
            cutout: 110,
          }}
          plugins={[
            {
              beforeDraw: function (chart) {
                var width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx
                ctx.restore()
                var fontSize = (height / 100).toFixed(2)
                ctx.font = fontSize + 'em sans-serif'
                ctx.textBaseline = 'top'
                var text = percentage + '%',
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2 - 12
                ctx.fillText(text, textX, textY)
                ctx.save()
              },
            },
          ]}
        />
        <div className="end-div">
          <Typography.Title level={5}>{number}</Typography.Title>
          {text}
        </div>
      </div>
    </div>
  )
}
