import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import CardComponent from '../components/FeedCardComponent'
import Progress from '../components/nprogress/Progress'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        setLoading(true)
        const getPhotos = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/feeds`)
                setPhotos(res.data.data)
                setLoading(false)
            } catch (err) {}
        }
        getPhotos()
    }, [])

    return (
        <>
            {' '}
            <Progress isAnimating={loading} key={0} />
            <h4 className="mt-5 fw-bold">Home</h4>
            {loading ? (
                <span className="sr-only">Loading... </span>
            ) : (
                <>
                    {photos.length !== 0 ? (
                        <>
                            <CardComponent photos={photos} />
                        </>
                    ) : (
                        <Alert variant="danger" className="container-fluid" dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>Try to refresh this page or maybe data you are looking for is not exists</p>
                        </Alert>
                    )}
                </>
            )}
        </>
    )
}

export default Home
