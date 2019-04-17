import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../actions';
import '../css/PostSchedule.css';
import Series from './Series';
import Bracket from './Bracket';
class PostSchedule extends Component {
  componentDidMount() {
    this.props.getSchedule();
  }

  renderSeries() {
    const { schedule } = this.props;
    return schedule.map(schedule => {
      return (
        <div className="item" key={schedule.series.id}>
          <div className="content">
            <div className="description">
              <h3 className="series-description">{schedule.series.id}</h3>
              <div className="ui relaxed">
                <Series games={schedule.games} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Bracket />
        <h4 className="ui horizontal divider header">Schedule</h4>
        {this.renderSeries()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('series', state.schedule);
  return { schedule: state.schedule };
};

export default connect(
  mapStateToProps,
  { getSchedule }
)(PostSchedule);
