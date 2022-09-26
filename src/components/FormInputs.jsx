import useFormContext from "../hooks/useFormContext"
import { Billing, OptIn, Shipping } from "../components"

const FormInputs = () => {
    const { page } = useFormContext()
    const display = {
        0: <Billing />,
        1: <Shipping />,
        2: <OptIn />
    }

    return (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )
}

export default FormInputs
