import React from 'react';

class Header extends React.PureComponent {

  renderAuthor(author) {
    return author.link ? <a key={author.name} href={author.link}>{author.name}</a> : author.name;
  }
  render() {
    return (
      <div className={'article-header idyll-header'}>
        <h1 className={'hed'}>
          <span className={'beginners-guide'}>
            A Beginners Guide To:
          </span><br/>
          {this.props.title}
        </h1>
        {
          this.props.subtitle && (
            <h2 className={'dek'}>
              {this.props.subtitle}
            </h2>
          )
        }
        {
          this.props.author ? (
            <div className={'byline'}>
              By {this.renderAuthor({ name: this.props.author, link: this.props.authorLink })}
            </div>
          ) : null
        }
        {
          this.props.authors ? (
            <div className={'byline'}>
              By: {
                this.props.authors.reduce((memo, author, i) => {
                  if (i === this.props.authors.length - 2 && this.props.authors.length > 1) {
                    return memo.concat([
                      this.renderAuthor(author),
                      this.props.authors.length > 2 ? ', and ' : ' and '
                    ])
                  } else if (i < this.props.authors.length - 2 && this.props.authors.length > 1) {
                    return memo.concat([
                      this.renderAuthor(author),
                      ', '
                    ])
                  } else {
                    return memo.concat([
                      this.renderAuthor(author)
                    ])
                  }
                }, [])
              }
            </div>
          ) : null
        }
        <div className='scrollContainer'>
          <p>Scroll to Learn!</p>
          {/* <img style={{height: 50}} src="../static/images/scroll.png" /> */}
        </div>
      </div>
    );
  }
}

Header._idyll = {
  name: "Header",
  tagType: "closed",
  props: [{
    name: "title",
    type: "string",
    example: '"Article Title"'
  }, {
    name: 'subtitle',
    type: 'string',
    example: '"Article subtitle."'
  }, {
    name: 'author',
    type: 'string',
    example: '"Author Name"'
  }, {
    name: 'authorLink',
    type: 'string',
    example: '"author.website"'
  }]
}

export default Header;