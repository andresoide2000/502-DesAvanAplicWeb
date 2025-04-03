import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Class1 from './class1.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Class1 />
    </StrictMode>,
)
