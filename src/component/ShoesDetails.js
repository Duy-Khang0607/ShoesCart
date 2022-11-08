import React, { Component } from "react";

export default class ShoesDetails extends Component {
  render() {
    return (
      <div
        id='details'
        className='position-fixed'
        style={{
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.75)",
        }}>
        <div
          className='shoesDetails w-50 bg-dark text-white position-absolute rounded animate__animated animate__fadeInDown text-left p-5'
          style={{
            top: "10%",
            left: "25%",
            transform: "translate(-25%,10%)",
            transition: "all 0.5s",
          }}>
          <button
            onClick={this.props.closeDetail}
            className='btn btn-danger position-absolute '
            style={{ top: "15px", right: "15px" }}>
            <i className='fa fa-compress-arrows-alt'></i>
          </button>
          <h3>
            ID: <span className='font-weight-light'>{this.props.item.id}</span>
          </h3>
          <h3>
            Name:
            <span className='font-weight-light'> {this.props.item.name}</span>
          </h3>
          <h3>
            Price:
            <span className='font-weight-light'> ${this.props.item.price}</span>
          </h3>
          <h3>
            Description:
            <span className='font-weight-light ml-1'>
              {this.props.item.description}
            </span>
          </h3>
          <h3>
            Quantity:
            <span className='font-weight-light ml-1'>
              {this.props.item.quantity}
            </span>
          </h3>
          <img alt='' src={this.props.item.image} />
        </div>
      </div>
    );
  }
}
