import React, { useEffect } from 'react';
import { FaAlignLeft } from 'react-icons/fa';

const ProductReport = () => {
   
    return (
       <>
    <FaAlignLeft className="btn" onClick={()=>window.editModal.showModal()}>open modal</FaAlignLeft>
    <dialog id="editModal" className="modal">
    <form method="dialog">
       <input className='w-48' type="number" name="edit"/>
    </form>
    </dialog>
       </>
    );
};

export default ProductReport;