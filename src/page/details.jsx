import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDetail,
  getActors,
  getReviews,
  getTrailers,
} from "../reducer/detailSlice";
import { faStar as Rating } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay as PlayBtn } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Container, Modal } from "react-bootstrap";
import Swipers from "../component/swiper/swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { NoImg } from "../asset/index_image";

const Detail = () => {
  const { id } = useParams();
  // const {details, actors, reviews, trailers} = useSelector((state) => state.movies)
  const detail = useSelector((state) => state.detail.details);
  const actor = useSelector((state) => state.actor.actors);
  const reviews = useSelector((state) => state.review.reviews);
  const trailer = useSelector((state) => state.trailer.trailers);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getActors(id));
    dispatch(getReviews(id));
    dispatch(getTrailers(id));
  }, [id]);

  return (
    <div>
      {/* <NavBar /> */}
      <header>
        <Carousel
          controls={false}
          indicators={false}
          slide={false}
          interval={null}
        >
          <Carousel.Item>
            <div className="image__banner">
              {detail.backdrop_path !== null ? (
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
                  alt="First slide"
                />
              ) : (
                <img className="d-block w-100" src={NoImg} alt="First slide" />
              )}
            </div>
          </Carousel.Item>
          <Carousel.Caption>
            <Container>
              <div style={{ textAlign: "start" }}>
                <h1>{detail.original_title}</h1>
                <p>{detail.overview}</p>
                <p>
                  <FontAwesomeIcon icon={Rating} /> {detail.vote_average} / 10
                </p>
                <Button variant="danger" onClick={showModal}>
                  <FontAwesomeIcon icon={PlayBtn} /> Watch Trailer
                </Button>
                <Modal show={show} onHide={closeModal} centered>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailer}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media: gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel>
      </header>
      <section style={{ marginTop: "4rem" }}>
        <Container>
          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ marginBottom: "1.5rem" }}>Actor</h2>
            <Swipers actor={actor} />
          </div>
          <div style={{ marginTop: "5rem" }}>
            <h2
              style={{
                marginBottom: "1.5rem",
                fontWeight: "600",
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
              }}
            >
              What people says
            </h2>
            <Swipers review={reviews.results} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Detail;
