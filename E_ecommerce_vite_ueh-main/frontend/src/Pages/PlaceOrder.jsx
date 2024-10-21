import React, { useContext } from 'react'
import './CSS/PlaceOrder.css'
import { ShopContext } from "../Context/ShopContext"

const PlaceOrder = () => {
    const {getTotalAmount} = useContext(ShopContext)
    return (
        <form className='place-order'>
            <div className='place-order-left'>
                <p className="title">Thông tin vận chuyển</p>
                <div className="multi-fields">
                    <input type="text" placeholder='Tên'/>
                    <input type="text" placeholder='Họ'/>
                </div>
                <input type="text" placeholder='Địa chỉ Email'/>
                <input type="text" placeholder='Đường'/>
                <div className="multi-fields">
                    <input type="text" placeholder='Phường'/>
                    <input type="text" placeholder='Quận'/>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Số điện thoại'/>
                    <input type="text" placeholder='Ghi chú'/>
                </div>
            </div>
            <div className="place-order-right"> 
            <div className="cartitems-total">
        <h1>Tổng</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalAmount()}</p>
            </div>
          </div>
          <button>Xác nhận thanh toán</button>
            </div>
            </div>
        </form>
    )
}

export default PlaceOrder
