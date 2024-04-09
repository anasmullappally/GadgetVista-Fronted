import ProductBase from '../components/admin/ProductBase';
import ProductDetailed from '../components/admin/ProductDetailed';

function AddProduct() {

    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Product</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <div className="adding-container">
                <ProductBase />
                <ProductDetailed />
            </div>
        </div>
    )
}

export default AddProduct