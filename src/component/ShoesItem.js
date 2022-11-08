import React, { Component } from "react";

export default class ShoesItem extends Component {
  render() {
    return (
      <div
        className='shoes__item p-3 rounded text-center'
        style={{ border: "1px solid black" }}>
        <img alt='' src={this.props.item.image} width='300px' />
        <h2>{this.props.item.name}</h2>
        <h4>${this.props.item.price}</h4>
        <button
          onClick={() => {
            this.props.addCart(this.props.item);
          }}
          className='btn btn-info p-2 mr-2'>
          Thêm vào giỏ
        </button>
        <button
          onClick={() => {
            this.props.showDetails(this.props.item);
          }}
          className='btn btn-dark p-2'>
          Xem chi tiết
        </button>
      </div>
    );
  }
}
