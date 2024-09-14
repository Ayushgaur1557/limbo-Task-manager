import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css"
import { Button } from '@mui/material';

const menu=[
    {name:"Home",value:"Home",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"DONE",value:"DONE",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"ASSIGNED",value:"ASSIGNED",role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED",value:"PENDING",role:["ROLE_ADMIN"]},
    {name:"Create New Task",value:"",role:["ROLE_ADMIN"]},
    {name:"NOTIFICATION",value:"NOTIFICATION",role:["ROLE_CUSTOMER"]},
]


const role = "ROLE_ADMIN";

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("Done");
    const handleMenuChange=(item)=>{
        setActiveMenu(item.name)
    }
    return (
        <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
            <div className='space-y-5 h-full'>
                <div className='flex justify-center'>
                    <Avatar
                        sx={{ width: "8rem", height: "8rem" }}
                        className='border-2 border-[#c24dd0]'
                        src='https://tse3.mm.bing.net/th?id=OIP.z3HA8bPMUwx38obnZcw1xQHaEK&pid=Api&P=0&h=180'
                    />
                </div>
                {
                    menu.filter((item) => item.role.includes(role))
                        .map((item) => 
                            <p 
                                onClick={() => handleMenuChange(item)} 
                                className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`}>

                                {item.name}
                            </p>)

                }
               
                <Button className='logout'>
                      logout
                </Button>
               
            </div>
        </div>
    )
}

export default Sidebar;
