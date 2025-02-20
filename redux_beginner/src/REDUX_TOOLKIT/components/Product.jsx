import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {
  addProducts,
  deleteProduct,
  editProduct,
} from "../Reducers/ProductSlice";


const Product = () => {
    const {products}=useSelector((state)=>state.product)
    console.log(products);

    
    
    const dispatch=useDispatch()
const [productId,setProductId]=useState("");
const [productName, setProductName] = useState("");
const [productBody, setProductBody] = useState("");
const [editId,setEditId]=useState("")
const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log(productId,productName,productBody);
    if (editId) {
      console.log("EDITING ITEM ID", editId);
      let EditedProduct = {productId, productName, productBody };
      console.log("EDITEDddddddddddddd VALUES", EditedProduct);
      dispatch(editProduct(EditedProduct))
      setEditId("")
      setProductId("");
      setProductName("");
      setProductBody("");
    } else {
        console.log("New Productttttttttttttt");
        
      let newProduct = { productId, productName, productBody };
      dispatch(addProducts(newProduct));
      setProductId("");
      setProductName("");
      setProductBody("");
    }
    
}
const DeleteHandler=(id)=>{
console.log("Product id in delete habdler",id);
dispatch(deleteProduct(id));

}
const EditHandler=(productId,product)=>{
    console.log("EditHandler",productId);
    setEditId(productId)
    
    setProductId(product.productId)
    setProductName(product.productName)
    setProductBody(product.productBody)
}
  return (
    <>
      <div>Product</div>
      <h1>ADD PRODUCT</h1>
      <form>
        ProductId:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          disabled={editId}
        />
        <br />
        ProductName:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        ProductBody:{" "}
        <input
          type="text"
          value={productBody}
          onChange={(e) => setProductBody(e.target.value)}
        />
        <br />
        <button type="Submit" onClick={(id) => SubmitHandler(id)}>
          {editId ? "Update" : "SUBMIT"}
        </button>
      </form>

      {/* {pdata?.map((product, index) => (
            <>
              <h1 key={index}>{product.productId}</h1>
              <h2>{product.productName}</h2>
              <h3>{product.productBody}</h3>
            </>
          ))} */}

      {products?.length !== 0 ? (
        <>
          <>
            <table
              style={{
                border: "2px solid",
                marginLeft: "40%",
                marginTop: "3%",
              }}
            >
              <tr>
                <th>PRODUCT_ID</th>
                <th>PRODUCT_NAME</th>
                <th>PRODUCT_BODY</th>
                <th>ACTIONS</th>
              </tr>
              {products?.map((product, index) => (
                <tr>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.productBody}</td>
                  <td>
                    <button type="button" onClick={() => EditHandler(product.productId,product)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => DeleteHandler(product.productId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </>
        </>
      ) : (
        "There is no data"
      )}
    </>
  );
   
}

export default Product