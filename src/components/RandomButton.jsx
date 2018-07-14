import React, {Component} from 'react';

type Props = {
  generateRamdom: void => void,
};

export class RandomButton extends Component<Props> {
  onClick = (e: SyntheticEvent<HTMLInputElement>) => this.props.generateRamdom();

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.onClick} className="btn">
          Feeling adventurous ? <br />
          Pick a challenge...
        </button>
      </div>
    );
  }
}
