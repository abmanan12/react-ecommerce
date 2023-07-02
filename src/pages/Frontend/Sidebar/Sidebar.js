import React, { useState } from 'react'

import { CardTravel, CheckBoxOutlineBlankOutlined, CheckOutlined, DraftsOutlined, HomeOutlined, InboxOutlined, MailOutline, ProductionQuantityLimits, ProductionQuantityLimitsOutlined, ProductionQuantityLimitsSharp, PropaneRounded, ReceiptOutlined } from '@mui/icons-material';
import { Button, Drawer, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const data = [
    { name: "Home", icon: <HomeOutlined />, link: '/' },
    { name: "Product", icon: <ProductionQuantityLimits/>, link: '/product' },
    { name: "Product1", icon: <ProductionQuantityLimitsOutlined />, link: '/product1' },
    { name: "Product2", icon: <ProductionQuantityLimitsSharp />, link: '/product2' },
    { name: "Cart", icon: <CardTravel />, link: '/cart' },
    { name: "Checkout", icon: <CheckOutlined />, link: '/checkout' },
];

export default function Sidebar() {

    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <ListItem key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Link to={item.link}><ListItemText primary={item.name} /></Link>
                </ListItem>
            ))}
        </div>
    );
    return (
        <>

            <div>
                <Button onClick={() => setOpen(true)}>Click me</Button>
                <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                    {getList()}
                </Drawer>
            </div>
        </>
    );
}
