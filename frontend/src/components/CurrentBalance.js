import React from 'react';
import {Card} from "antd";

const CurrentBalance = () => {
  return (
   <Card title="Current Balance" style={{Width: "100%"}}>
    <div className='currentBalance'>
        <div style={{lineHeight: "70px"}}>$ 121.50</div>
        <div style={{fontSize: "20px"}}>Available</div>
    </div>

    <div className='balanceOptions'>
        <div className='extraOption'>Swap Tokens</div>
        <div className='extraOption'>Bridge Tokens</div>
    </div>
   </Card>
  )
}

export default CurrentBalance;