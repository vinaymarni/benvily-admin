"use client";

import Button from '@/components/customComponents/Button';
import InputField from '@/components/customComponents/InputField';
import { Header } from '@/components/header';
import { users } from '@/lib/dummy-data';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AdminHome() {
  const [filters, setFilters] = useState({name: "", mobile: "", gst: "", since: ""});
  const router:any = useRouter();

  const onAction = (status: string) => {
    if(status === "edit"){
        router.push("/admin/dashboard");
    }else{
        console.log(status)
    }
  }

  const onFilterChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  const onClear = () => {
    setFilters({name: "", mobile: "", gst: "", since: ""})
  }

  return (
    <>
        <Header />
        <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-gray-800">
                Admin Dashboard
            </h1>
            <p className="text-gray-500">
                Welcome back, Admin
            </p>
            </div>

            <button className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800">
            Add User
            </button>
        </div>

        {/* Cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow">
                <h2 className="text-sm text-gray-500">Total Users</h2>
                <p className="mt-2 text-3xl font-bold">{users.length}</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-sm text-gray-500">Revenue</h2>
            <p className="mt-2 text-3xl font-bold">₹100,000/-</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-sm text-gray-500">Bookings</h2>
            <p className="mt-2 text-3xl font-bold">320</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-sm text-gray-500">Pending</h2>
            <p className="mt-2 text-3xl font-bold">24</p>
            </div>
        </div>

        <h2 className='font-bold mb-2 text-[20px] '>Search</h2>
        <div className='flex items-center gap-2 pb-4 flex-wrap '>
            
            <InputField 
                inputType="text" 
                placeholder="Search by Name" 
                name="name"
                value={filters.name} 
                // labelName="Name"
                // labelClassName=""
                inputClassName="p-1 pl-3 border-2 border-solid border-gray rounded-[10px] outline-none bg-white "                 
                onChange={(e:any)=>onFilterChange(e)} 
            />
            <InputField 
                inputType="text" 
                placeholder="Search by Mobile" 
                name="mobile"
                value={filters.mobile} 
                // labelName="Name"
                // labelClassName=""
                inputClassName="p-1 pl-3 border-2 border-solid border-gray rounded-[10px] outline-none bg-white "                 
                onChange={(e:any)=>onFilterChange(e)} 
            />
            <InputField 
                inputType="text" 
                placeholder="Search by GST" 
                name="gst"
                value={filters.gst} 
                // labelName="Name"
                // labelClassName=""
                inputClassName="p-1 pl-3 border-2 border-solid border-gray rounded-[10px] outline-none bg-white "                 
                onChange={(e:any)=>onFilterChange(e)} 
            />

            <Button 
                buttonClassName=" h-[30px] bg-black text-white font-bold rounded-[10px] px-4 cursor-pointer "
                onSubmit={()=>onClear()}
                title="Clear Filters"
            />
            
        </div>

        {/* Table */}
        <div className="overflow-x-auto relative max-w-full rounded-2xl bg-white shadow">
            <table className="max-w-full border-collapse ">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    S.no
                </th> 

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    ID
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Mobile
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Salons
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Services
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Styles
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Since
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Bookings
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    GST
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Actions
                </th>
                </tr>
            </thead>

            <tbody>
                {users.map((user, index) => {
                    if(
                        (filters.name === "" || (user.name.toLowerCase().includes(filters.name.toLowerCase()))) &&
                        (filters.mobile === "" || (user.phone.toLowerCase().includes(filters.mobile.toLowerCase()))) &&
                        (filters.gst === "" || (user.gst.toLowerCase().includes(filters.gst.toLowerCase())))
                    ){
                    return(
                        <tr
                            key={user.id}
                            className="border-t hover:bg-gray-50 "
                        >
                            <td className="px-6 py-4 font-medium text-gray-800 sticky right-0 ">
                            {index + 1}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                            #{user.id}
                            </td>

                            <td className="px-6 py-4 font-medium text-gray-800 text-nowrap">
                            {user.name}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600 text-nowrap">
                            {user.email}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600 text-nowrap ">
                            {user.phone}
                            </td>

                            <td className="px-6 py-4">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                user.status === "A"
                                    ? "bg-green-100 text-green-700"
                                    : user.status === "P"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                            >
                                {user.status === "A" ? "Active" : user.status === "P" ? "Pending" : "Rejected" }
                            </span>
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                            {user.salons}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                            {user.services}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                            {user.styles}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600 text-nowrap">
                            {user.createdAt}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                            {user.bookings}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                            {user.gst}
                            </td>

                            <td className="px-6 py-4">
                            <div className="flex gap-3">
                                <button onClick={()=>onAction("edit")} className="text-blue-600 cursor-pointer hover:underline">
                                Edit
                                </button>

                                <button onClick={()=>onAction("delete")} className="text-red-600 cursor-pointer hover:underline">
                                Delete
                                </button>
                            </div>
                            </td>
                        </tr>
                    )}
                })}
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
}
