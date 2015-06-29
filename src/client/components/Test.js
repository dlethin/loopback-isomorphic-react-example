import React from 'react';

export default class Test {

  propTypes: {
    title: React.PropTypes.string
  }

  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>
          {title}
        </h1>

        <a href='test2'>
          go to test 2
        </a>
      </div>
    );
  }
}
