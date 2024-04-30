import React, {useState, useEffect} from 'react'

export default function ProgressBar() {
    const [filled, setFilled] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev + 2), 50)
        }
    }, [filled, isRunning])

    return (
        <>
            <p>ciaooo</p>
            <div style = {{
                height: '100%',
                width: `${filled}%`,
                backgroundColor: 'green',
                transition: "width 0.5s"
            }}>
            </div>
        </>
    )
}