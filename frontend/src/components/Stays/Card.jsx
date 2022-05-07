import React from "react";
import "./Result.css";

import { Carousel } from "react-bootstrap";
export const Card = ({ data }) => {
  return (
    <div>
      <div className="result-container">
        <div className="img-container">
          <Carousel>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100 size-cour"
                src={data.img}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                <p>
                  {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100 size-cour"
                src={data.img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100 size-cour"
                src={data.img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100 size-cour"
                src={data.img4}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="name-container">
          <div className="hotel-name">
            <h4>{data.name}</h4>
            <h5>{data.des}</h5>
          </div>
          <div className="details-container">
            <div className="left-details-container">
              <div>{data.refund}</div>
              {/* <div>before wed</div> */}
              <div>{data.reserve}</div>
              <div>
                <span className="rating-details">{data.rating}/5 </span>

                {data.rating2}
              </div>
            </div>
            <div className="right-details-container">
              <div className="tag">{ data.tag}</div>
              <div className="line-through">
                {"Rs "}
                {data.rs}
              </div>
              <h5>Rs{data.rs1}</h5>
              <div>Rs{data.rs1} Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
