import useFormContext from "../hooks/useFormContext"

const OptIn = () => {
    const { data, handleChange } = useFormContext()

    return (
        <div className="container">
            <div className="form-check mb-3">
                <input 
                    type="checkbox" 
                    id="optInNews" 
                    name="optInNews" 
                    checked={data.optInNews} 
                    onChange={handleChange}  
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    &nbsp;Receive our newsletter
                </label>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Save 10% Now</li>
                <li className="list-group-item">Receive Discount Coupons</li>
                <li className="list-group-item">Find Out About New Products</li>
            </ul>
        </div>
    )
}

export default OptIn
