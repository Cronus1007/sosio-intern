import React, { Component } from "react";
class Input extends Component {
  render() {
    const { onSave, onSubmit, onChange } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="tweets">Tweets</label>
        <input id="tweets" type="text" onChange={onChange} />
        <button className="btn btn-primary button" onClick={onSave}>
          Save
        </button>
      </form>
    );
  }
}

export default Input;
