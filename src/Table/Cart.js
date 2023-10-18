import { Product } from "./Product";
import { useState,useEffect} from "react";
import { Discount } from "./Discount";


export const Cart=()=>{
    
    const [data,setData]=useState([]);

    const [updateprice,setUpdateprice]=useState(0)

    
    function getValue(a,price){
       const newvalue=a;
    //    const newprice=price;
      
        setData([...data,newvalue]);

        setUpdateprice((prevState) => prevState + price );

        // console.log(price)
    }

    function remove(index,price){
        //   console.log(index)

          const updatedata=[...data];
          updatedata.splice(index,1);
          setData(updatedata)

          setUpdateprice((prevState) => prevState - price)
         

         
    }

  
    return(
        <div className="card">
            <div>

            
            <Discount/>
            <Product senddata={getValue}/>
            <h2>shopping cart</h2>

            <table>
                 <tr >
                    <th>#</th>
                    <th>Product name</th>
                    <th>org price</th>
                    <th>Discount percentage</th>
                    <th>Discount price</th>
                    <th>vendor</th>
                    <th>removecart</th>
                 </tr>
                {data.map((val,index)=>{

                    const updateprice= val.price-(val.price*(val.discount/100))
                    return(
                       

                        
                        <tr key={index}>
                       <td>{index+1}</td>
                       <td>{val.name}</td>
                       <td>{val.price}</td>
                       <td>{val.discount}</td>
                       <td>{updateprice}</td>
                       <td>{val.vendor}</td>
                       <td><button className="removecart" onClick={()=>{remove(index,updateprice)}}>Removecart</button></td>
                    </tr>
                          
                    )
                    
                })}
            </table>

              <h2>Total price : Rs.{updateprice}</h2>
        </div>
        </div>
    )
}