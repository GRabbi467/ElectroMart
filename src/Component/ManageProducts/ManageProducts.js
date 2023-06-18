import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const ManageProducts = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>This is product management Page</h1>
        </div>
    );
};

export default ManageProducts;