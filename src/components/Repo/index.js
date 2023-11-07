import './index.css'

const Repo = props => {
  const {each} = props
  const {
    repoName,
    repoDes,
    ownerAvatar,
    issues,
    score,
    pushedTime,
    fullName,
  } = each
  return (
    <div className="repo-bg">
      <img src={ownerAvatar} className="owner-image" />
      <div>
        <p className="repo-name">{repoName}</p>
        <p style={{fontSize: '24px'}}>{repoDes}</p>
        <div className="for-stars">
          <p style={{fontSize: '20px', color: 'red', marginRight: '20px'}}>
            No.of Issues :{issues}
          </p>
          <p style={{fontSize: '20px', color: 'red', marginRight: '20px'}}>
            No. of stars:{score}
          </p>
          <p style={{fontSize: '20px', color: 'red', marginRight: '20px'}}>
            last pushed {pushedTime} by {fullName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Repo
