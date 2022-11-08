import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div
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
          className='w-50 bg-dark text-white position-absolute rounded animate__animated animate__fadeInDown'
          style={{
            top: "10%",
            left: "25%",
            transform: "translate(-25%,10%)",
            transition: "all 0.5s",
            height: "100%",
            overflowY: "scroll",
          }}>
          <button
            onClick={this.props.closeCart}
            className='btn btn-danger position-absolute '
            style={{ top: "15px", right: "15px" }}>
            <i className='fa fa-compress-arrows-alt'></i>
          </button>
          <span
            className='font-weight-bold position-absolute'
            style={{ fontSize: "25px", top: "25px", left: "15px" }}>
            TOTAL: ${this.props.totalProduct()}
          </span>
          <h1 className='text-center fs-3 py-3'>Cart</h1>
          <table className='table text-white rounded '>
            <thead>
              <tr>
                <th>Mã SP </th>
                <th>Tên SP </th>
                <th>Hình ảnh</th>
                <th>Số lượng </th>
                <th>Thành tiền </th>
                <th>Tổng tiền</th>
                <th>
                  <i className='fa fa-trash'></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr key={item.product.id}>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td>
                      <img alt='Img' src={item.product.image} width='150px' />
                    </td>
                    <td className='d-flex justify-content-center'>
                      <button
                        onClick={() => {
                          this.props.downQuantityCart(item.product.id);
                        }}
                        className='btn btn-secondary'>
                        -
                      </button>
                      <h5 className='mx-2'>{item.quantity}</h5>
                      <button
                        onClick={() => {
                          this.props.upQuantityCart(item.product.id);
                        }}
                        className='btn btn-secondary'>
                        +
                      </button>
                    </td>
                    <td>{item.product.price}</td>
                    <td>{item.product.price * item.quantity}</td>
                    <td>
                      <button
                        onClick={() => this.props.deleteCart()}
                        className='btn btn-danger'>
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
