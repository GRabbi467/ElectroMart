import React, {useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';


const Addproducts = () => {
    const {user} = useContext(AuthContext);
    const imgbbKey = process.env.REACT_APP_imgbb_key;
    const [select,setSelect] = useState('');
    const [sucMsg,setSucMsg] = useState('');
    const  handleSubmit= (e)=>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const shopname = form.shopname.value;
        const category = select;
        const pname = form.pName.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const image = form.img.files[0];
        const details = form.specs.value;
        

  
        const formData = new FormData();
        formData.append('image',image)


        const url = `https://api.imgbb.com/1/upload?&key=${imgbbKey}`;
         fetch(url,{
            method:'POST',
            body : formData
        })
        .then(res => res.json())
        .then(imgData =>{
            const imgURL = imgData.data.url;
            
            const ProductDetails = {
                email : email,
                shopName:shopname,
                category: category,
                productName: pname,
                quantity : quantity,
                price : price,
                image: imgURL,
                details : details,
            }
            

        fetch(`http://localhost:5000/products`,{
        method:'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body:JSON.stringify(ProductDetails)
       })
       .then(res => res.json())
       .then(data =>{
       return (data.acknowledged ? setSucMsg('Product Added Successfully') :setSucMsg('Product is not added'))
       })
       form.reset();  
        })

    }
    return (
        <div className='my-8'>
        <h1 className='text-emerald-500 text-center text-4xl font-semibold mb-8'>ADD PRODUCTS AS A SHOPER</h1>
        <p>{sucMsg}</p>
        <form className='flex flex-col gap-4 items-center my-4' onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder="Email" className="input input-success w-full max-w-xs" disabled defaultValue={user?.email}/>
        <input type="text" name='shopname' placeholder="Shop/Seller Name" className="input input-success w-full max-w-xs" required />
        <input type="text" name='pName' placeholder="Product Name" className="input input-success w-full max-w-xs" required />
        <input type="number" name='quantity' placeholder="Product Qunatity" className="input input-success w-full max-w-xs" required />
        <input type="text" name='price' placeholder="Product Price $:" className="input input-success w-full max-w-xs"  required/>
 
        <select className="select input-bordered border select-success w-full max-w-xs" onChange={e=> setSelect(e.target.value)}>
            <option selected disabled>Select Product Category</option>
            <option>Smart Phone</option>
            <option>Laptop</option>
            <option>Smart Watch</option>
            <option>Smart TV</option>
            <option>Others</option>
        </select>

        <input type="file" name='img' className="file-input file-input-bordered file-input-success w-full max-w-xs" />
        <textarea name='specs' className="textarea w-full max-w-xs textarea-success" placeholder="Add Product Details"></textarea>
        <button type='submit' className="btn btn-wide btn-success">Add Product</button>
        </form>
    </div>
    );
};

export default Addproducts;