import React, { useEffect, useState } from 'react'
import Progress from '../components/nprogress/Progress'
import { Alert } from 'react-bootstrap'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPaginateComponent from '../components/ReactPaginateComponent'
import PictureCardComponent from '../components/PictureCardComponent'
import { constants } from '../utils/constats'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Pictures = () => {
    const [loading, setLoading] = React.useState(false)
    const currentPage = useQuery().get('page') || 1
    const [pageNumber, setPageNumber] = useState(0)
    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await axios.get(`${constants.apiUrl}/api/photos?page=${pageNumber + 1}`)
            setData(res.data.data)
            setLoading(false)
        }
        fetchData()
    }, [pageNumber])

    const handlePageClick = (data) => {
        const selectedPage = data.selected
        setPageNumber(selectedPage)
        navigate(`/pictures?page=${selectedPage + 1}`)
    }

    return (
        <>
            <Progress isAnimating={loading} key={0} />
            <h4 className="mt-5 fw-bold">Pictures</h4>

            {loading ? (
                <span className="sr-only">Loading... </span>
            ) : (
                <>
                    {data.photos?.length !== 0 ? (
                        <>
                            <PictureCardComponent photos={data.photos} />
                            <ReactPaginateComponent
                                pageCount={data.total}
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

export default Pictures
