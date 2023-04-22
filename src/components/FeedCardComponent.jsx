import React from 'react'
import { Card } from 'react-bootstrap'

const FeedCardComponent = ({ photos }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {photos &&
                    photos.map((photo, i) => (
                        <div className="col" key={i}>
                            <Card className="text-white shadow-sm card__content">
                                <Card.Img src={photo.url} alt={photo.id} width={100} height={270} />
                                <Card.ImgOverlay className="card__img_overlay">
                                    <Card.Title className="text-shadow" style={{ textShadow: '2px 2px 4px #000' }}>
                                        {photo.title}
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default FeedCardComponent
