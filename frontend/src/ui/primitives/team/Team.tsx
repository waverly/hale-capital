"use client"

import { useState } from "react"
import "@theme/Components/TeamMember.scss"
import { PortableText } from "next-sanity"
import { TeamMembers } from "@ui"

export const Team = ({ team, teamTagline }: Pick<NonNullable<Sanity.PageQueryResult>, "team" | "teamTagline">) => {
  const [activeSection, setActiveSection] = useState("team")
  return !team ? null : (
    <div className="our-team">
      <div className="inner-wrap">
        <h3>Our Team</h3>
        <PortableText value={teamTagline!} />
        <div className="team-members">
          <h3 className="serif">
            <span className={activeSection == "team" ? "active" : ""} onClick={() => setActiveSection("team")}>
              Investment Team
            </span>
            {" / "}
            <span className={activeSection == "operations" ? "active" : ""} onClick={() => setActiveSection("operations")}>
              Operating Advisors
            </span>
          </h3>
          {!!team && <TeamMembers team={team} activeSection={activeSection} />}
        </div>
      </div>
    </div>
  )
}
