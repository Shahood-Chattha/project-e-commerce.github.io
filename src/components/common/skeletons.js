import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const ProductCarouselSkeleton = () => {
    return(
        <div className="">
            <div className="carousel-inner" style={{height: "50vh", width: "auto", margin: "auto"}}>
                <Skeleton width="100%" height="50vh" />
            </div>
        </div>
    )
}

export const ProductDetailSkeleton = () => {
    return(
        <div className="container mt-4 pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="m-auto" style={{width: "10rem"}}>
                <Skeleton animation="wave" variant="rect" height={200} />
              </div>
            </div>
            <div className="col-md-8">
              <Skeleton animation="wave" variant="text" height={40} width={300} />
              <Skeleton animation="wave" variant="text" height={20} width={150} />
              <Skeleton animation="wave" variant="text" height={20} width={100} />
              <Skeleton animation="wave" variant="text" height={100} width={300} />
              <Skeleton animation="wave" variant="circle" height={40} width={40} />
            </div>
          </div>
        </div>
    )
}

export const ProductCardSkeleton = ({ cards }) => {
    return(
        Array(cards).fill(0).map((item, i) => 
        <div className="card bg-secondary mx-2" style={{ width: "12rem" }}>
            <SkeletonTheme color="#e6e6e6" highlightColor="#bfbfbf">
                <div className='mx-2' >
                    <Skeleton height={120} />
                </div>
                <div className="card-body">
                <a to="/" style={{ textDecoration: "none" }}>
                    <h5 className="card-title">
                    <Skeleton height={20} width={100} />
                    </h5>
                </a>
                <p className="card-text text-sm">
                    <Skeleton height={20} width={50} />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <Skeleton width={70} height={60} />
                    <Skeleton width={70} height={60} />
                </div>
                </div>
            </SkeletonTheme>
        </div>
        )
    )
}

export const ProductRowSkeleton = ({cards}) => {
    return(
        Array(cards).fill(0).map((item, i) =>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card bg-secondary mx-1" style={{ width: "12rem" }}>
                <SkeletonTheme color="#e6e6e6" highlightColor="#bfbfbf">
                <div className='mx-2' >
                    <Skeleton height={120} />
                </div>
                <div className="card-body">
                <a to="/" style={{ textDecoration: "none" }}>
                    <h5 className="card-title">
                    <Skeleton height={20} width={100} />
                    </h5>
                </a>
                <p className="card-text text-sm">
                    <Skeleton height={20} width={50} />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <Skeleton width={70} height={60} />
                    <Skeleton width={70} height={60} />
                </div>
                </div>
            </SkeletonTheme>
                </div>
            </div>
        )
    )
}
