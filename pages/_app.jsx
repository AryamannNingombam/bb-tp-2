import '../app.scss'
import SideNav from '../components/SideNav/SideNav'
import { Layout, Menu, Breadcrumb, Typography } from 'antd'
import TopNav from '../components/TopNav/TopNav'
import TeamMemberPerformace from '../components/TeamMemberPerformance/TeamMemberPerformance'
import { QueryClient, QueryClientProvider } from 'react-query'
import Stats from '../components/Stats/Stats'
import MainGraph from '../components/MainGraph/MainGraph'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import BarGraph from '../components/BarGraph/BarGraph'

const { SubMenu } = Menu
const { Content, Sider } = Layout
Chart.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
)
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-div" style={{ padding: '24px 0' }}>
        <SideNav />
        <Content className="content">
          <TopNav />
          <div className="section top-section">
            <div className="stats-section">
              <Stats
                color={'#FFD339'}
                percentage={50}
                title={'Works'}
                number={75}
                text={'Works Today'}
              />
              <Stats
                color={'#FF6D39'}
                percentage={25}
                title={'Analytics'}
                number={310}
                text={'Analytics Today'}
              />
              <Stats
                color={'#9539FF'}
                percentage={59}
                title={'Statistics'}
                number={75}
                text={'Works Today'}
              />
              <Stats
                color={'#3954FF'}
                percentage={75}
                title={'Tasks'}
                number={75}
                text={'Tasks Today'}
              />
            </div>
            <BarGraph />
          </div>
          <div className="section">
            <MainGraph />
            <TeamMemberPerformace />
          </div>
        </Content>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
