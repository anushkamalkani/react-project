import React, { Component } from 'react';
import Timer from 'react-compound-timer';

class EntryTimer extends Component {

  render() {
    return (
      <Timer initialTime={0} startImmediately={false}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
              <Timer.Days /> days
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                <Timer.Milliseconds /> milliseconds
            </div>
            <br />
            <div className="TimerDiv"> Timer is {timerState.toLowerCase()}.</div>
            <br />
            <div>
              <button className="btn btn-primary" onClick={start}>Start</button>&nbsp;
              <button className="btn btn-primary" onClick={pause}>Pause</button>&nbsp;
              <button className="btn btn-primary" onClick={resume}>Resume</button>&nbsp;
              <button className="btn btn-primary" onClick={stop}>Stop</button>&nbsp;
              <button className="btn btn-primary" onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    )
  }

}

export default EntryTimer;