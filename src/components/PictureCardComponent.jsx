import React from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'

const breakpoints = {
    default: 5,
    1024: 4,
    900: 3,
    768: 2,
}

const PictureCardComponent = ({ photos }) => {
    return (
        <>
            <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {/* */}
                {photos?.map((photo, i) => (
                    <div key={i} className="img__wrap">
                        <Link to={`/pictures/${photo.id}`}>
                            <img
                                src={photo.url}
                                alt={photo.i}
                                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
                            />
                            <div className="img__description">
                                <p>{photo.title}</p>
                                <p>{photo.owner}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </>
    )
}

export default PictureCardComponent
