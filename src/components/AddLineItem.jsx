import "../style.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";

function InvoiceForm() {
    const [isItemVisible, setIsItemVisible] = useState(false);
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
    const [tax, setTax] = useState(false);
    const [addTaxButton, setAddTaxButton] = useState(true);
    const [shipping, setShipping] = useState(false);
    const [addShippingButton, setAddShippingButton] = useState(true);
    const [discount, setDiscount] = useState("");
    const [taxInput, setTaxInput] = useState("");
    const [shippingInput, setShippingInput] = useState("");
    const [discount2, setDiscount2] = useState(0);
    const [items, setItems] = useState([{ name: "", price: 0, quantity: 0, total: 0 }]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDiscount2Change = (event) => {
        setDiscount2(event.target.value);
    };
    const handleInputChange = (event) => {
        setDiscount(event.target.value);
    };
    const handleTaxChange = (event) => {
        setTaxInput(event.target.value);
    };
    const handleShippingChange = (event) => {
        setShippingInput(event.target.value);
    };
    const handleAddItemT = () => {
        setIsItemVisible(true);
        setIsAddButtonVisible(false);
    };

    const handleRemoveItemT = () => {
        setIsItemVisible(false);
        setIsAddButtonVisible(true);
    };

    const handleTax = () => {
        setTax(true);
        setAddTaxButton(false);
    };

    const handleTaxRemove = () => {
        setTax(false);
        setAddTaxButton(true);
    };
    const handleShipping = () => {
        setShipping(true);
        setAddShippingButton(false);
    };

    const handleShippingRemove = () => {
        setShipping(false);
        setAddShippingButton(true);
    };

    const handleChange = (event, index) => {
        const newItems = [...items];
        newItems[index][event.target.name] = event.target.value;
        newItems[index].total = newItems[index].price * newItems[index].quantity;
        setItems(newItems);
        setTotalPrice(newItems.reduce((acc, item) => acc + item.total, 0));
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        setItems([...items, { name: "", price: "", quantity: "", total: 0 }]);
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((item, i) => i !== index));
        setTotalPrice(items.filter((item, i) => i !== index).reduce((acc, item) => acc + item.total, 0));
    };

    const totalTaka = parseFloat((discount * totalPrice) / 100).toFixed(2);

    const afterDiscount = totalPrice - totalTaka + (taxInput * totalPrice) / 100 + +((shippingInput * totalPrice) / 100);
    return (
        <div>
            <form>
                {items.map((item, i) => (
                    <div key={i} className="line-item-div">
                        <label>
                            <input type="text" name="name" placeholder="Description of service" className="line-item-name" value={item.name} onChange={(e) => handleChange(e, i)} />
                        </label>

                        <label>
                            <input type="number" name="quantity" value={item.quantity} placeholder="1" className="line-item-quantity" onChange={(e) => handleChange(e, i)} />
                        </label>
                        <label>
                            <input type="number" name="price" value={item.price} className="line-item-quantity" placeholder="$  0" onChange={(e) => handleChange(e, i)} />
                        </label>

                        <p className="line-item-quantity" name="total">
                            {" "}
                            $ {item.total}
                        </p>

                        <button className="remove-button " onClick={() => handleRemoveItem(i)}>
                            {" "}
                            <FontAwesomeIcon icon={faXmark} className="" />
                        </button>
                        <br />
                    </div>
                ))}

                <button type="button" onClick={handleAddItem} className="add-item-button">
                    <FontAwesomeIcon icon={faPlus} /> Line Item
                </button>
            </form>

            {/* another ats=art */}
            <div className="lastPart">
                <div className="">
                    <input type="text" className="note" ng-model="document.date" tabIndex="21" date-picker="" id="dp1674378469536" placeholder="Notes" /> <br />
                    <input type="text" className="notes-any" placeholder=" Notes any relevant information not already covered" /> <br />
                    <input type="text" className="note" placeholder=" Terms " /> <br />

                    <input type="text" className="notes-any" placeholder=" Terms and conditions - late fees, payment method" />
                </div>

                <div className="">
                    <div className="sub-total-main-div ">
                        <input type="text" className="sub-total1" placeholder="Sub Total" />
                        <p className="sub-total-p">$ {totalPrice}</p>
                    </div>

                    {/* <Discount /> */}
                    {/* add another start */}
                    <div>
                        {isItemVisible && (
                            <div className="sub-total-main-div">
                                <input type="text" className="sub-total" placeholder="Discount " />
                                <input
                                    type="number"
                                    className="discount"
                                    name="discount"
                                    // value={discount}
                                    placeholder="  0 %"
                                    value={discount}
                                    onChange={handleInputChange}
                                />
                                <button className="remove-button" onClick={handleRemoveItemT}>
                                    <FontAwesomeIcon icon={faXmark} className="text-muted" />
                                </button>
                            </div>
                        )}
                        {tax && (
                            <div className="imageDiv " style={{marginTop:'10px', marginBottom:'10px'}}>
                                <input type="text" className="sub-total" placeholder="Tax " />
                                <input type="number" className="discount" placeholder=" 0 %" value={taxInput} onChange={handleTaxChange} />
                                <button className="remove-button" onClick={handleTaxRemove}>
                                    <FontAwesomeIcon icon={faXmark} className="text-muted" />
                                </button>
                            </div>
                        )}
                        {shipping && (
                            <div className="imageDiv "  style={{marginTop:'10px', marginBottom:'10px'}}>
                                <input type="text" className="sub-total" placeholder="Shipping " />
                                <input type="number" className="discount" placeholder="  0 %" value={shippingInput} onChange={handleShippingChange} />
                                <button className="remove-button" onClick={handleShippingRemove}>
                                    <FontAwesomeIcon icon={faXmark} className="text-muted" />
                                </button>
                            </div>
                        )}

                        {isAddButtonVisible && (
                            <button className="discount-button" style={{marginLeft:'8px'}} onClick={handleAddItemT}>
                                {" "}
                                <FontAwesomeIcon icon={faPlus} /> Discount
                                 
                            </button>
                        )}

                        {addTaxButton && (
                            <button className="discount-button" onClick={handleTax}>
                                {" "}
                                <FontAwesomeIcon icon={faPlus} /> Tax
                                 
                            </button>
                        )}

                        {addShippingButton && (
                            <button className="discount-button" onClick={handleShipping}>
                                {" "}
                                <FontAwesomeIcon icon={faPlus} /> Shipping
                                 
                            </button>
                        )}
                    </div>
                    <div className="imageDiv margin-top-bottom">
                        <input type="text" className="sub-total" placeholder="Total" />
                        <p className="sub-total-p">${afterDiscount}</p>
                    </div>
                    <div className="imageDiv margin-top-bottom" >
                        <input type="text" className="sub-total" placeholder="Amount Paid " />
                        <input type="number" className="discount" placeholder=" $ 0.00 " value={discount2} onChange={handleDiscount2Change} />
                    </div>
                    <div className="imageDiv margin-top-bottom">
                        <input type="text" className="sub-total" placeholder="Balance due" />
                        <p className="sub-total-p">${afterDiscount - discount2}</p>
                    </div>
                </div>
            </div>
            {/* another end  */}
        </div>
    );
}

export default InvoiceForm;
