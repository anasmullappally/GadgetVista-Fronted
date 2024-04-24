import AddVariants from "../components/admin/AddVariants";

function AddVariant() {

    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Variant</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <AddVariants />
        </div>
    )
}

export default AddVariant