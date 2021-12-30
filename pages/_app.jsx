import '../app.scss'
import SideNav from '../components/SideNav/SideNav'
import { Layout, Menu, Breadcrumb, Typography } from 'antd'
import TopNav from '../components/TopNav/TopNav'
import TeamMemberPerformace from '../components/TeamMemberPerformance/TeamMemberPerformance'
import { QueryClient, QueryClientProvider } from 'react-query'
import Stats from '../components/Stats/Stats'

const { SubMenu } = Menu
const { Content, Sider } = Layout

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-div" style={{ padding: '24px 0' }}>
        <SideNav />
        <Content className="content">
          <TopNav />
          <div className="section">
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
            <div className="tasks"></div>
          </div>
          <div className="section">
            {' '}
            <TeamMemberPerformace />
          </div>
        </Content>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
