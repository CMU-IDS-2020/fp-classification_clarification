import React from 'react';

class Answer extends React.Component {
  render() {
    const {correct, show} = this.props

    return (
      <div>
        {correct && show && <div>Correct!</div>}
        {!correct && show && <div>Wrong :(</div>}
      </div>
    )
  }
}

export default Answer;