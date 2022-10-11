import { useMemo }      from "react"
import { ProgressBar }  from 'react-bootstrap'
import useFormContext   from "../hooks/useFormContext"

const ProgressLine = () => {
  const max = 100
  const { page, title } = useFormContext()
  return useMemo(() => {
    const intval = max / Object.keys(title).length
    const progress = ((page + 1) * intval).toFixed(0)
    
    return (
      <ProgressBar
        className="px-0"
        max={max}
        now={progress} 
        label={`${progress}%`} 
        striped variant={progress < 34 ? "warning" : progress < 67.1 ? "success" : "info"}
      />)
  },[page, title])
}

export default ProgressLine
