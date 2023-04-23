import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import Progress from '../components/nprogress/Progress'
import Masonry from 'react-masonry-css'
import { FullscreenExit } from 'react-bootstrap-icons'
import './Home.css'
import { constants } from '../utils/constats'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        setLoading(true)
        const getPhotos = async () => {
            try {
                const res = await axios.get(`${constants.apiUrl}/api/feeds`)
                setPhotos(res.data.data)
                setLoading(false)
            } catch (err) {}
        }
        getPhotos()
    }, [])

    const breakpoints = {
        default: 4,
        1024: 4,
        900: 3,
        768: 2,
    }

    // image gallery layout
    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImageSrc = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }

    const escFunction = useCallback((event) => {
        if (event.key === 'Escape')
            //Do something when esc is pressed
            setModel(false)
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)
        return () => document.removeEventListener('keydown', escFunction, false)
    }, [escFunction])

    return (
        <>
            <Progress isAnimating={loading} key={0} />
            <h4 className="mt-5 fw-bold">Home</h4>
            {loading ? (
                <span className="sr-only">Loading... </span>
            ) : (
                <>
                    {photos.length !== 0 ? (
                        <>
                            <div className={model ? 'model open' : 'model'}>
                                <img src={tempImgSrc} alt="" />
                                <FullscreenExit onClick={() => setModel(false)} />
                            </div>
                            <Masonry
                                breakpointCols={breakpoints}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                {/* array of JSX items */}
                                {photos.map((photo, i) => (
                                    <div key={i} className="img__wrap" onClick={() => getImageSrc(photo.url)}>
                                        <img
                                            src={photo.url}
                                            alt={photo.i}
                                            style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
                                        />
                                        <div className="img__description">
                                            <p>{photo.title}</p>
                                            <p>{photo.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
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
