import { CITIES }       from '../config'
import { InputField }   from '../components'
import useFormContext   from "../hooks/useFormContext"

const Billing = () => {
    const { data, handleChange } = useFormContext()

    return (
        <div className="container"> 
            <div className="row">
                <div className="col">
                <InputField 
                    label="First name"
                    name="billFirstName" 
                    pattern="([A-Z])[\w+.]{1,}" 
                    placeholder="Jane" 
                    value={data.billFirstName} 
                    handleChange={handleChange} 
                />
                </div>
                <div className="col">
                    <InputField 
                        label="Last name"
                        name="billLastName" 
                        pattern="([A-Z])[\w+.]{1,}" 
                        placeholder="Doe" 
                        value={data.billLastName} 
                        handleChange={handleChange} 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputField 
                        type='number'
                        label="Zip Code"
                        name="billZipCode" 
                        pattern="[0-9]{5}" 
                        placeholder="12345" 
                        value={data.billZipCode} 
                        handleChange={handleChange} 
                    />
                </div>
                <div className="col">
                    <div className="">
                        <label htmlFor="billState" className="form-label">State</label>
                        <select
                            id="billState"
                            name="billState"
                            className="form-select form-select-sm"
                            value={data.billState}
                            onChange={handleChange}
                        >
                            <option value="">-- Select one --</option>
                            {Object.keys(CITIES).map((key, index) => (
                                <option key={index} value={key}>{ CITIES[key]}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <InputField 
                type='text'
                label="City"
                name="billCity" 
                pattern="([A-Z])[\w\s.]{1,}" 
                placeholder="Budapest" 
                value={data.billCity} 
                handleChange={handleChange} 
            />
            <InputField 
                type='text'
                label="Address"
                name="billAddress1" 
                pattern="[\w\d\s.#]{2,}" 
                placeholder="Alkotás út 51." 
                value={data.billAddress1} 
                handleChange={handleChange} 
            />
            <InputField 
                type='text'
                label="2nd Address line"
                name="billAddress2" 
                pattern="[\w\d\s.#]{2,}" 
                placeholder="Apt. 2" 
                value={data.billAddress2} 
                handleChange={handleChange} 
            />
        </div>
    )
}

export default Billing
