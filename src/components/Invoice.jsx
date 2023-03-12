import "../style.css";
import React, { useState } from "react";
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import Pdf from "react-to-pdf";
import ImageUpload from "./ImageUpload";
import InvoiceForm from "./AddLineItem";
import { jsPDF } from "jspdf";
// import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";


const print =() => {
    
        const pdf = new jsPDF();
    
        const invoiceNumber = "INV-001";
        const date = new Date().toLocaleDateString();
        const paymentTerms = "Due upon receipt";
        const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
        const phoneNumber = "555-555-5555";
    
        const itemName = "Product 1";
        const quantity = 2;
        const rate = 50;
        const amount = rate * quantity;
    
        pdf.text(`Invoice #: ${invoiceNumber}`, 10, 20);
        pdf.text(`Date: ${date}`, 10, 30);
        pdf.text(`Payment Terms: ${paymentTerms}`, 10, 40);
        pdf.text(`Due Date: ${dueDate}`, 10, 50);
        pdf.text(`Phone Number: ${phoneNumber}`, 10, 60);
    
        pdf.text(`Item: ${itemName}`, 10, 80);
        pdf.text(`Quantity: ${quantity}`, 10, 90);
        pdf.text(`Rate: $${rate}`, 10, 100);
        pdf.text(`Amount: $${amount}`, 10, 110);
    
        pdf.save('invoice.pdf');
   


}

// const ref = React.createRef();

const Invoice = () => {
    return (
        <>
            <div className=" container border-1 container-custom container-fluid " >
                <div className=" mainDiv ">
                    <div className="rowDiv ">
                        <div className="">
                            <ImageUpload />

                            {/* <div className="pt-3  mb-2"> */}
                            <input className="form" placeholder="Who is this invoice from? (required)"></input>
                            {/* </div> */}
                            <div className="bill ">
                                <input className="billForm " placeholder="Bill To" />
                                <input className="billForm" placeholder="" />
                            </div>
                            <div className="bill">
                                <textarea className="billForm2 " placeholder="Who is this invoice from? (required)" style={{ width: "80%" }}></textarea>
                                <textarea className="billForm2 " placeholder="(Optional)" style={{ width: "70%", resize: "none" }}></textarea>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h1 className="invoice">INVOICE</h1>
                                <div className="invoiceDiv">
                                    <span className="input-group-text1">#</span>
                                    <input className="span-input" />
                                </div>
                            </div>
                            <div className="date">
                                <input type="text" className="date-input1" placeholder="Date" />
                                <input type="date" className="date-input3 text-muted" />
                            </div>
                            <div className="date">
                                <input type="text" className="date-input1" placeholder="Payment Terms" />
                                <input type="text" className="date-input2" />
                            </div>
                            <div className="date">
                                <input type="text" className="date-input1" placeholder="Due Date" />
                                <input type="text" className="date-input2" />
                            </div>
                            <div className="date">
                                <input type="text" className="date-input1" placeholder="Phone Number" />
                                <input type="text" className="date-input2" />
                            </div>
                        </div>
                    </div>

                    {/* Another part  */}
                    <div className="second-part">
                        <div className="imageDiv">
                            <input className="item-input" placeholder="Item" />

                            <input className=" quantity-input" placeholder="Quantity" tabIndex="28" />

                            <input className=" quantity-input" placeholder="Rate" tabIndex="28" />

                            <input className="quantity-input" placeholder="Amount" tabIndex="28" />
                        </div>
                    </div>
                    <div>
                        <InvoiceForm />
                    </div>
                </div>

               
            </div>
           
        </>
    );
};

export default Invoice;
