import { CITIES }       from '../config'
import { InputField }   from '../components'
import useFormContext   from "../hooks/useFormContext"

const Shipping = () => {
    const { data, handleChange } = useFormContext()

    return (
        <div className="container">
            <div className="form-check mb-3">
                <input 
                    type="checkbox" 
                    id="sameAsBilling" 
                    name="sameAsBilling" 
                    checked={data.sameAsBilling} 
                    onChange={handleChange}  
                />
                <label className="form-check-label" htmlFor="sameAsBilling">
                    &nbsp;Same as Billing Address
                </label>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <InputField 
                            type='text'
                            label="First Name"
                            name="shipFirstName" 
                            pattern="([A-Z])[\w+.]{1,}" 
                            placeholder="Jane" 
                            value={data.shipFirstName} 
                            handleChange={handleChange} 
                            disabled={data.sameAsBilling}
                        />
                    </div>
                    <div className="col">
                        <InputField 
                            type='text'
                            label="Last Name"
                            name="shipLastName" 
                            pattern="([A-Z])[\w+.]{1,}" 
                            placeholder="Doe" 
                            value={data.shipLastName} 
                            handleChange={handleChange} 
                            disabled={data.sameAsBilling}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InputField 
                            type='number'
                            label="Zip Code"
                            name="shipZipCode" 
                            pattern="[0-9]{5}" 
                            placeholder="1124" 
                            value={data.shipZipCode} 
                            handleChange={handleChange} 
                            disabled={data.sameAsBilling}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="billState" className="form-label">State</label>
                        <select
                            id="shipState"
                            name="shipState"
                            className="form-select form-select-sm"
                            value={data.shipState}
                            onChange={handleChange}
                            disabled={data.sameAsBilling}
                        >
                            <option value="">-- Select one --</option>
                            {Object.keys(CITIES).map((key, index) => (
                                <option key={index} value={key}>{ CITIES[key]}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <InputField 
                    type='text'
                    label="Address"
                    name="shipAddress1" 
                    pattern="[\w\d\s.#]{2,}" 
                    placeholder="555 Wallaby Way" 
                    value={data.shipAddress1} 
                    handleChange={handleChange} 
                    disabled={data.sameAsBilling}
                />
                <InputField 
                    type='text'
                    label="2nd Address line"
                    name="shipAddress2" 
                    pattern="[\w\d\s.#]{2,}" 
                    placeholder="Apt. 2" 
                    value={data.shipAddress2} 
                    handleChange={handleChange} 
                    disabled={data.sameAsBilling}
                />
                <InputField 
                    type='text'
                    label="City"
                    name="shipCity" 
                    pattern="([A-Z])[\w\s.]{1,}" 
                    placeholder="Budapest" 
                    value={data.shipCity} 
                    handleChange={handleChange} 
                    disabled={data.sameAsBilling}
                />
            </div>
        </div>
    )
}

export default Shipping
