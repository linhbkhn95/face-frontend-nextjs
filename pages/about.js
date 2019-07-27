import React from 'react';
import { connect } from 'react-redux';


class About extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <p>Next with Redux-Saga</p>
        <p>UTC timezone:</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // lastUpdate: state.getIn(['clock', 'lastUpdate']),
    // light: state.getIn(['clock', 'light'])
  }
}

export default connect(mapStateToProps)(About);
