import React from 'react';
import { Link} from "react-router-dom";
import './Billing.css';
import invoice from '../invoice.png';
function Billing() {
  return (
    <div className='p-5'>
    <div className='billcont'>
        <header>
        <h1 className='hbill'><i class="fa-solid fa-file-invoice"></i>&nbsp;Billing&nbsp;<i class="fa-solid fa-receipt"></i></h1>
        <div className="bill">
                        
                        <ul className='biltabs'>
                            <li><a><Link to='#bhist'>Billing History</Link></a></li>
                            <li> <a>Biling Info </a> </li>
                            <li> <a>Balances</a>  </li>
                            
                        </ul>
                    </div>
        </header>
        <hr/>
        <div className='bcontent' id='bhist'>
        <h4 id='bh'>Billing History</h4>
        <div className='smenu'>
        <div className='smenu-tabs'>
           <select>
            <option value='Data range'>Data range</option>
           </select>

           <select>
            <option value='Transaction'>Transaction</option>
           </select> 

           <select>
            <option value='Service'>Service</option>
           </select> 

           <select>
            <option value='Currency'>Currency</option>
           </select> 
           </div>
           <input id='sinv' type='text' placeholder=' &#x1F50D; &nbsp; Search by invoice or order number'/>
           <div>
            <span id='sres'>Showing 0 results</span>
        </div>
        <div className='btable'>
            <table className='sbtable'>
                <thead className='tabhead'>
                    <tr>
                        <th colSpan={2}><label><span><input type='checkbox' id='check' disabled/></span></label></th>
                        <th colSpan={3} className='tabth'>Date</th>
                        <th colSpan={4} className='tabth'>Transaction</th>
                        <th colSpan={5} className='tabth'>Service</th>
                        <th colSpan={3} className='tabth'>Order</th>
                        <th colSpan={2} style={{textAlign:'right'}} className='tabth'>Currency</th>
                        <th colSpan={3} style={{textAlign:'right'}} className='tabth'>Total</th>
                        <th width="58px" style={{textAlign:'right'}} className='tabth'> PDF</th>

                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div className='invoice'>
        <img src={invoice}  width="300px" height="163px" style={{border:'none'}}/>
        <h3 style={{marginTop:'24px'}}>No invoices yet...</h3>
        <p style={{marginTop:'8px'}}>
            Ready to place an order?
            <br/>
            Make sure <a href='#'  style={{color:'blue'}} >your billing info</a> is upto date.
        </p>
        <a className='expf'>Explore Fiverr</a>
        </div>

        </div>
       


        </div>
        </div>
    </div>
  )
}

export default Billing;