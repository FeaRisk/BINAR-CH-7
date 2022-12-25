import React, { useState, useEffect } from "react";
import { imgSlide1, imgSlide2, imgSlide3 } from "../../asset/index_image";
import { useSelector, useDispatch } from "react-redux";
import { getPopular, getUpcoming } from "../../reducer/movieSlice";
import { getGenres } from "../../reducer/genreSlice";
import Swipers from "../../component/swiper/swiper";
import { Carousel, Button, Container, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay as PlayBtn } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight as ArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genres = useSelector((state) => state.genres);
  const { popular, upcoming } = useSelector((state) => state.movies);
  //   const [popular, setPopular] = useState([]);
  //   const [upcoming, setUpComing] = useState([]);

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getUpcoming());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      {/* <NavBar/> */}
      <header>
        <Carousel controls={false}>
          <Carousel.Item>
            <div className="images relative">
              <img
                className="d-block w-100"
                src={imgSlide1}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <Container>
                <div className="header text-start">
                  <h1 className="title__caption text-white">
                    Doctor Strange in the Multiverse of Madness
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button variant="danger" onClick={showModal}>
                    <FontAwesomeIcon icon={PlayBtn} /> Watch Trailer
                  </Button>
                  <Modal show={show} onHide={closeModal} centered>
                    <div>
                      <iframe
                        width="885"
                        height="498"
                        src="https://www.youtube.com/embed/aWzlQ2N6qqg"
                        title="Marvel Studios' Doctor Strange in the Multiverse of Madness | Official Trailer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Modal>
                </div>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          {/** */}

          <Carousel.Item>
            <div className="images relative">
              <img
                className="d-block w-100"
                src={imgSlide2}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <Container>
                <div className="header text-start">
                  <h1 className="title__caption text-white">Moon Knight</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button variant="danger" onClick={showModal}>
                    <FontAwesomeIcon icon={PlayBtn} /> Watch Trailer
                  </Button>
                  <Modal show={show} onHide={closeModal} centered>
                    <div>
                      <iframe
                        width="885"
                        height="498"
                        src="https://www.youtube.com/embed/x7Krla_UxRg"
                        title="Marvel Studios’ Moon Knight | Official Trailer | Disney+"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Modal>
                </div>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="images relative">
              <img
                className="d-block w-100"
                src={imgSlide3}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <Container>
                <div className="header text-start">
                  <h1 className="title__caption text-white">
                    Jurassic World Dominion
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button variant="danger" onClick={showModal}>
                    <FontAwesomeIcon icon={PlayBtn} /> Watch Trailer
                  </Button>
                  <Modal show={show} onHide={closeModal} centered>
                    <div>
                      <iframe
                        width="885"
                        height="498"
                        src="https://www.youtube.com/embed/fb5ELWi-ekk"
                        title="Jurassic World Dominion - Official Trailer [HD]"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Modal>
                </div>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <section className="content-section">
        <Container>
          <div className="tittle-content">
            <h2>Popular Movie</h2>
            <p onClick={() => navigate("/")}>
              See All Movies <FontAwesomeIcon icon={ArrowRight} />
            </p>
          </div>
          <Swipers movie={popular} />
          <div className="tittle-content">
            <h2>Browse by Category </h2>
            <p>
              See All Movies <FontAwesomeIcon icon={ArrowRight} />
            </p>
          </div>
          <Swipers cate={genres.genres} on />
          <br />
          <br />
          <Swipers movie={upcoming} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
