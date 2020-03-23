import React from 'react'

class SearchBar extends React.Component {

    state = {
        term: ''
    }
    
    onFormSubmit = e => {
        e.preventDefault()
        this.props.getSearchTerm(this.state.term)
    }
  render () {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <p>Search image</p>
          <input type='text' value={this.props.term} onChange={(e) => this.setState({ term: e.target.value })} />
        </form>
      </div>
    )
  }
}

export default SearchBar

