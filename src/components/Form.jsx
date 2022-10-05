import { FormInputs, ProgressLine } from '../components'
import useFormContext from "../hooks/useFormContext"

const Form = () => {
    const {
        page,
        data,
        title,
        setPage,
        prevHide,
        nextHide,
        canSubmit,
        submitHide,
        disablePrev,
        disableNext
    } = useFormContext()

    const handlePrev    = () => setPage(prev => prev - 1)
    const handleNext    = () => setPage(prev => prev + 1)
    const handleSubmit  = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div className="container">
            <ProgressLine />
            <form onSubmit={handleSubmit}>
                <h2 className='mb-3 mt-4 '>{title[page]}</h2>
                <FormInputs />
                <div className="d-grid gap-2 d-flex justify-content-between">
                    <button 
                        type="button" 
                        disabled={disablePrev}
                        className={`btn btn-sm btn-warning px-3 m-3 ${prevHide}`} onClick={handlePrev} 
                    >
                        Prev
                    </button>
                    <button 
                        type="button" 
                        disabled={disableNext}
                        className={`btn btn-sm btn-info px-3 m-3 ${nextHide}`} onClick={handleNext} 
                    >
                        Next
                    </button>
                    <button 
                        type="submit" 
                        disabled={!canSubmit}
                        className={`btn btn-sm btn-success px-3 m-3 ${submitHide}`} 
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
