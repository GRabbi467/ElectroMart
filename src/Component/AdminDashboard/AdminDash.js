import React from 'react';

const AdminDash = () => {
    return (
        <div>
            <form className='flex flex-col' action="">
            <input type="text" placeholder="Email" className="input input-ghost w-full max-w-xs" />
            <input type="text" placeholder="Shop/Seller Name" className="input input-ghost w-full max-w-xs" />
            <input type="text" placeholder="Product Name" className="input input-ghost w-full max-w-xs" />
            <select className="select select-bordered w-full max-w-xs">
                <option>Smart Phone</option>
                <option>Laptop</option>
                <option>Smart Watch</option>
            </select>
            <input type="text" placeholder="Specs" className="input input-ghost w-full max-w-xs" />

            </form>
        </div>
    );
};

export default AdminDash;