import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import logo2 from "../assets/img/yeni-logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]; // Dizi elemanına erişmek için "toRotate[i]" kullanılmalı
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);

      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  useEffect(() => {
    // Initial trigger for the tick
    tick();
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Portföyüme Hoş Geldiniz</span>
                  <h1>
                    {"Merhaba Ben Kubilay"} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Kendimi Front-End alanında geliştiriyorum. Şuan için
                    profesyonel iş tecrübem yok. Gönüllü projeler ve kendi
                    yapmış olduğum projler ile bilgilerimi pekiştirip yeni
                    teknolojiler öğreniyorum ve yeteneklerimi güncel tutmaya
                    çalışıyorum.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kblyclkn"
                    target="-blank"
                    onClick={() => console.log("connect")}
                  >
                    Bağlantı Kur <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logo2} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
