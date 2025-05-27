import "@/theme/Components/TeamMember.scss"
import Image from "next/image"
import { PortableText } from "next-sanity"

type ITeamMembers = Pick<NonNullable<Sanity.PageQueryResult>, "team"> & {
  activeSection: string
}

export const TeamMembers = ({ team, activeSection }: ITeamMembers) => {
  return !team ? null : (
    <ul className={activeSection}>
      {team?.map((member, index) => (
        <li key={`team-member-${index}`} className={`team-member ${member.role}`}>
          <div className="member-inner-wrap">
            <div className="profile-pic">
              <Image src={member.headShot?.asset!.url!} alt={member.name!} width={member.headShot?.asset!.metadata?.dimensions?.width} height={member.headShot?.asset!.metadata?.dimensions?.height} />
            </div>
            <div className="text-wrap">
              <div className="info-wrap">
                <div className="name">
                  <p className="sans-serif">{member.name}</p>
                </div>
                <div className="jobtitle">
                  <p className="serif-italic">{member.jobTitle}</p>
                </div>
                <div className="bio">
                  <PortableText value={member.bio!} />
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
