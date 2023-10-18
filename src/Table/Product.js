import { Data } from "./Data";
import { useState } from "react";
import "./Table.css"

export const Product=({senddata})=>{
    const [tabledata,setTabledata]=useState(Data);

    function cart(val){
       
        const updateprice= val.price-(val.price*(val.discount/100))
        senddata(val,updateprice)
       

    }
    return(
           <div>
              <h2>Product table</h2>
              <table>
                 <tr>
                    <th>#</th>
                    <th>Product name</th>
                    <th>price</th>
                    <th>tags</th>
                    <th>vendor</th>
                    <th>cart</th>
                 </tr>
                 
                    {tabledata.map((val,index)=>{
                        return(
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.tags[0]},{val.tags[1]}</td>
                                <td>{val.vendor}</td>
                                <td><button className="cartbtn" onClick={()=>{cart(val)}}>ADD TO CART</button></td>
                            </tr>
                        )
                    })}

                 
              </table>
           </div>
    )
}