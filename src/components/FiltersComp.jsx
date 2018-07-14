import React, {Component} from 'react';

type Props = {
  filterList: void => void,
};

export class FiltersComp extends Component<Props> {
  onCheck = (e: SyntheticEvent<HTMLInputElement>) => this.props.filterList();

  render() {
    return (
      <div className="wrapper">
        <input
          id="filter"
          type="checkbox"
          className="checkbox"
          checked={this.props.filter}
          onChange={this.onCheck}
        />
        <label htmlFor="filter" className="wrapper">
          <h4>DISPLAY ALL ?</h4>
          <div className="slider round switch" />
        </label>
      </div>
    );
  }
}
