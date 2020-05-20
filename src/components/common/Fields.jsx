import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
            <div className="form-group">
                <label htmlFor={this.props.htmlFor} className='form-label'>{this.props.label}</label>
                <input
                    className="form-control"
                    id={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    max={this.props.max}
                    name={this.props.name}
                />
            </div>
    );
  }
}

export default Field;