import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
Button } from "mdbreact";

class Graph extends Component {
  render() {
    return (
      <Container className="pb-0 contCards col-12  col-lg-10 offset-lg-1">
        <Carousel activeItem={1} length={3} slide={false} showControls={false} showIndicators={false} multiItem>
          <CarouselInner >
            <Row>
              <CarouselItem  itemId="1">
              <Row >
                <Col xl="1" className="controls-top">

                </Col>
                <Col sm="12" lg="4" md="6" xl="2" className="itemMonth">
                <Card  className="px-0 months">
                  <CardBody className="mx-0 pt-2 pb-2 text-center">
                    <CardTitle className="mb-0">Abríl</CardTitle>
                    <p className="coment mb-0 ">desde AR$ 15.100</p>
                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="4" md="6" xl="2" className="itemMonth" >
                <Card  className="px-0 months">
                  <CardBody className=" pt-2 pb-2 text-center">
                    <CardTitle className="mb-0">Mayo</CardTitle>
                    <p className="coment mb-0 ">desde AR$ 16.100</p>
                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="4" md="12" xl="2" className="itemMonth" >
                <Card  className="px-0 months active">
                  <CardBody className="pt-2 pb-2 text-center activeItem">
                    <CardTitle className="mb-0">Junio</CardTitle>
                    <p className="coment mb-0 ">desde AR$ 14.500</p>
                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="4" md="6" xl="2" className="itemMonth">
                <Card className="px-0 months" >
                  <CardBody className="pt-2 pb-2 text-center">
                    <CardTitle className="mb-0">Julio</CardTitle>
                    <p className="coment mb-0 ">desde AR$ 17.800</p>
                  </CardBody>
                </Card>
                </Col>
                <Col sm="12" lg="4" md="6" xl="3" className="itemMonth" >
                <Card className="px-0 months" >
                  <CardBody className="pt-2 pb-2 text-center">
                    <CardTitle className="mb-0">Agosto</CardTitle>
                    <p className="coment mb-0 ">desde AR$ 22.500</p>
                  </CardBody>
                </Card>
                </Col>
                <img className="imgGraph px-0 col-xl-11 offset-xl-1" src="./images/graph.jpg"></img>
                </Row>
              </CarouselItem>

            </Row>

          </CarouselInner>
        </Carousel>

      </Container>
      );
    }
  }

export default Graph;
