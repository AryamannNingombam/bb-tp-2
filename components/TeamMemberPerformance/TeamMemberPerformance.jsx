import { Skeleton, Switch, Card, Avatar, Menu, Tag, Typography } from 'antd'
import Data from '../../constants/data.json'
const { Meta } = Card
export default function TeamMemberPerformace() {
  const memberData = Data
  return (
    <>
      <div className="team-member-main-div">
        <div className="main-text">
          <Typography.Title level={5}>Team Member Performance</Typography.Title>
        </div>

        {memberData?.team?.map((member, index) => (
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
