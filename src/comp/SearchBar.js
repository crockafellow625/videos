import React from 'react'

export default class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }
  onFormSubmit = event => {
    event.preventDefault()
    //   Make sure I call callback from parent component
    this.props.onFormSubmit(this.state.term)
  }
  render () {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <input
              value={this.state.term}
              type='text'
              name='videoSearch'
              id='videoSearch'
              onChange={this.onInputChange}
              placeholder='Search'
            />
          </div>
        </form>
      </div>
    )
  }
}
