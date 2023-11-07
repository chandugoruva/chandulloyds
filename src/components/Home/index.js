// import React from 'react'
import './index.css'
import {useState, useEffect} from 'react'
import Repo from '../Repo'

const Home = () => {
  const [data, setData] = useState([])
  const getSuccessData = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'token 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',
      },
    }
    const fetchedData = await fetch(url, options)
    const response = await fetchedData.json()
    const UpdatedData = response.items.map(each => ({
      repoName: each.name,
      repoDes: each.description,
      ownerAvatar: each.owner.avatar_url,
      issues: each.open_issues_count,
      score: each.score,
      pushedTime: each.pushed_at,
      fullName: each.full_name,
    }))
    setData(UpdatedData)

    console.log(response.items)
  }
  useEffect(() => {
    getSuccessData()
  }, [])
  return (
    <div className="main-bg">
      <center>
        <h1 className="main-heading">Most Starred Repos</h1>
      </center>
      {data.map(each => (
        <Repo each={each} />
      ))}
    </div>
  )
}
export default Home
