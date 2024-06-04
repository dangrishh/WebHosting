import React from "react";
import { IoIosAnalytics } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
// import { Link } from 'react-router-dom';
import { HiOutlineViewGrid } from "react-icons/hi";

// A dropdown function 
// const Dropdown = ({ title, children }) => {
//   return (
//     <div className="dropdown dropdown-hover bg-transparent ">
//       <div tabIndex={0} role="button" className="bg-transparen hover:text-white">{title}</div>
//       <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-black text-white rounded-md w-40 ">
//         <li className="">
//           {children}
//         </li>
      
//       </ul>
//     </div>
//   );
// };

export const SidebarData = [
    {
      title: 'View Analytics',
      icon: <IoIosAnalytics />,
      path: '/admin/Analytics'
    },
    {
      title: 'Manage Activities',
      icon: <HiOutlineViewGrid />,
      path: '/admin/Activities'
    },

    {
      title: 'Manage User',
      icon: <CgProfile />,
      path: '/admin/users'
    },

    // {
    //   title:(
    //     <Dropdown title= "Manage User Profile"> 
    //       <Link to ='/pending'>Pending User</Link>
    //       <Link to ='/accepted'>Accepted User</Link>
    //   </Dropdown>
    //   ),
    //   icon: <CgProfile/>
    // },


    {
      title: 'Logout',
      icon: <IoMdExit />,
      path: '/login',
    }
  ];