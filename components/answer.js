import React from 'react';

class Answer extends React.Component {
  render() {
    const {correct, show, children} = this.props

    return (
      <div>
        {correct && show && <div className='correct'>Correct! ✅</div>}
        {!correct && show && <div className='wrong'>Wrong X</div>}
        {show && children}
      </div>
    )
  }
}

export default Answer;