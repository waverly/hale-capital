import React from "react"
import "../../theme/Components/Expand.scss"

export const Expand = ({ expanded }: { expanded: boolean }) => {
  return expanded === true ? (
    <div className="icon">
      <div className="minus">
        <span className="horizontal" />
      </div>
    </div>
  ) : (
    <div className="icon">
      <div className="plus">
        <span className="vertical" />
        <span className="horizontal" />
      </div>
    </div>
  )
}
