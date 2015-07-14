import React   from 'react';
import numeral from 'numeral';
import Skycons from 'react-skycons';

const {
  Component,
} = React;

class CurrentConditions extends Component {
  skyconIconName() {
    if (this.props.icon === undefined) {
      return null;
    }
    let value = this.props.icon.toUpperCase();
    return value.replace(/-/g, '_');
  }

  render () {
    // Don't print until props are passed down
    if (this.props.temperature !== undefined) {
      return (
        <div id='current-conditions'>
          <div className='temp-and-skycon'>
            <Skycons className='skycon' color='black' icon={this.skyconIconName()} />
            <div className='temp'>
              <div>
                <span className='value'>
                  {Math.round(this.props.temperature)}
                </span>
                <span clasName='degree-symbol'>
                  &deg;
                </span>
              </div>
            </div>
            <div className='clear'></div>
          </div>
          <div className='summary'>
            {this.props.summary}
          </div>
          <div className='wind'>
            <span className='label'>Wind:</span>
            {' '}
            <span className='value'>
              {numeral(this.props.windSpeed).format('0.0')}
              {' '}
              mph (S)
            </span>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default CurrentConditions;