import React from 'react'
import faker from 'faker'
import SearchBar from '../comp/SearchBar'
import youtube from '../apis/youtube'
import VideoList from '../comp/VideoList'
import VideoDetail from '../comp/VideoDetail'
import CommentsMockup from '../comp/CommentsMockup'
import NavBar from '../comp/NavBar'

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount () {
    this.onTermSubmit('Metallica Hardwired')
  }

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render () {
    return (
      <div className='ui container'>
        <NavBar />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />{' '}
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.findName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
              <CommentsMockup
                author={faker.name.firstName()}
                text={faker.lorem.words()}
                avatar={faker.image.avatar()}
              />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
