import { Form } from './components'
import { FormProvider } from './contexts/FormContext'

function App() {
  return (
    <div className="container mt-5">
      <FormProvider >
        <Form />
      </FormProvider>
    </div>
  )
}

export default App
