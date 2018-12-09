import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
Button } from "mdbreact";

class MultiCarouselPage extends Component {
  render() {
    return (
      <Container className="contCards col-12  col-lg-12 col-xl-10 offset-xl-1">
        <Carousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
          <CarouselInner >
            <Row>
              <CarouselItem  itemId="1">
              <Row >
                <Col sm="12" lg="3" md="6" xl="3" xl="3" className="clearfix">
                <Card className="mb-2 cardItem" >
                  <CardImage className="img-fluid" src="./images/HamptonnInn.jpg" />
                  <CardBody>
                    <CardTitle>Hampton Inn Man...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/YotelNewYork.jpg" />
                  <CardBody>
                    <CardTitle>Yotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.850</span><br></br>
                    Antes <span className="precioViejo">AR$ 7.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/Wyndham.jpg" />
                  <CardBody>
                    <CardTitle>Wyndham New Yor...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.605</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block ">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/STEWART.jpg" />
                  <CardBody>
                    <CardTitle>Stewart Hotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                </Row>
              </CarouselItem>
              <CarouselItem itemId="2">
              <Row >
                <Col sm="12" lg="3" md="6" xl="3" xl="3" className="clearfix">
                <Card className="mb-2 cardItem" >
                  <CardImage className="img-fluid" src="./images/HamptonnInn.jpg" />
                  <CardBody>
                    <CardTitle>Hampton Inn Man...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/YotelNewYork.jpg" />
                  <CardBody>
                    <CardTitle>Yotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.850</span><br></br>
                    Antes <span className="precioViejo">AR$ 7.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/Wyndham.jpg" />
                  <CardBody>
                    <CardTitle>Wyndham New Yor...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.605</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block ">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/STEWART.jpg" />
                  <CardBody>
                    <CardTitle>Stewart Hotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                </Row>
              </CarouselItem>
              <CarouselItem itemId="3">
              <Row >
                <Col sm="12" lg="3" md="6" xl="3" xl="3" className="clearfix">
                <Card className="mb-2 cardItem" >
                  <CardImage className="img-fluid" src="./images/HamptonnInn.jpg" />
                  <CardBody>
                    <CardTitle>Hampton Inn Man...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/YotelNewYork.jpg" />
                  <CardBody>
                    <CardTitle>Yotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.850</span><br></br>
                    Antes <span className="precioViejo">AR$ 7.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>


                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/Wyndham.jpg" />
                  <CardBody>
                    <CardTitle>Wyndham New Yor...</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 4.605</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="3" md="6" xl="3" className="clearfix d-none d-md-block ">
                <Card className="mb-2 cardItem">
                  <CardImage className="img-fluid" src="./images/STEWART.jpg" />
                  <CardBody>
                    <CardTitle>Stewart Hotel</CardTitle>
                    <div className="col-md-6 col-lg-12 text-warning pl-0 stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                    </div>
                    <div className="contPrecio">
                    <p className="textPrecio">Desde <br></br><span className="precio">AR$ 5.961</span><br></br>
                    Antes <span className="precioViejo">AR$ 13.247</span></p>
                    <p className="coment">Habitación por noche</p>
                    </div>
                    <div className="verHotel text-right"><a href="">VER HOTEL</a></div>

                  </CardBody>
                </Card>
                </Col>
                </Row>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
      );
    }
  }

export default MultiCarouselPage;
