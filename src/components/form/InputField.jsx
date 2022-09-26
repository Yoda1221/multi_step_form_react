import React from 'react'

const InputField = ({
  name, 
  label, 
  pattern, 
  placeholder, 
  type="text", 
  value, 
  handleChange, 
  disabled = false
}) => {
  return (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          pattern={pattern}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          className="form-control form-control-sm"
        />
    </div>
  )
}

export default InputField
