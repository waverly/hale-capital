import "@/theme/Components/Header.scss"

export const PageHeader = ({ index, title }: { index: string; title?: string }) => (
  <header className="page-header">
    <div className="header-info">
      {/* <div className="index sans-serif">{index}</div> */}
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  </header>
)
