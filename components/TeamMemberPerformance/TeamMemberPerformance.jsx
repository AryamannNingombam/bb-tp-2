import { Skeleton, Switch, Card, Avatar, Menu, Tag, Typography } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useQuery } from 'react-query'
import { GetMemberData } from '../../services/member.service'

const { Meta } = Card
export default function TeamMemberPerformace() {
  const memberData = useQuery('member-data', GetMemberData)
  console.log(memberData.data)
  return (
    <>
      <div className="team-member-main-div">
        <div className="main-text">
          <Typography.Title level={5}>Team Member Performance</Typography.Title>
        </div>

        {memberData?.data?.team?.map((member, index) => (
          <Card className="main-card" key={index}>
            <div className="container">
              <Meta
                avatar={
                  <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
                }
                title={member.name}
                description={member.designation}
              />
              <Tag className="tag" color="geekblue">
                {member.performance}
              </Tag>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
