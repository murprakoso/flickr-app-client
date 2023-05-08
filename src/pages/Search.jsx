import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import Progress from '../components/nprogress/Progress'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPaginateComponent from '../components/ReactPaginateComponent'
import PictureCardComponent from '../components/PictureCardComponent'
import { getSearch } from '../utils/api'

// query string
const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Search = () => {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const query = useQuery().get('q')
    // paginate
    const [pageNumber, setPageNumber] = useState(0)
    const currentPage = useQuery().get('page') || 1
    const navigate = useNavigate()

    // get data photos by keyword of search
    useEffect(() => {
        setLoading(true)
        const getPhotos = async () => {
            try {
                const response = await getSearch(query, pageNumber + 1)
                setPhotos(response)
                setLoading(false)
            } catch (err) {}
        }

        if (query !== '') {
            getPhotos()
        }
    }, [query, pageNumber])

    // pagination link
    const handlePageClick = (data) => {
        const selectedPage = data.selected
        setPageNumber(selectedPage)
        navigate(`/search?q=${query}&page=${selectedPage + 1}`)
    }

    return (
        <>
            <Progress isAnimating={loading} key={0} />
            <h4 className="mt-5 fw-bold">Search : {query}</h4>

            {loading ? (
                <span className="sr-only">Loading... </span>
            ) : (
                <>
                    {photos.photos?.length !== 0 ? (
                        <>
                            <PictureCardComponent photos={photos.photos} />
                            <ReactPaginateComponent
                                pageCount={photos.total}
                                onPageChange={handlePageClick}
                                forcePage={currentPage - 1}
                            />
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

export default Search
