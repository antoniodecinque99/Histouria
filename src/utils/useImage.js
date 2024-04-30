import { useEffect, useState } from 'react'

const useImage = (fileName) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            if (fileName.substr(0,12) == "C:\\fakepath\\")
                fileName = fileName.substr(12)
            try {
                const response = await import(`../assets/Quizzes/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage