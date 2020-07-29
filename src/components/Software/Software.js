import React, { lazy, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/Header';
import { Wait } from '../UI/Wait';
const Cost = lazy(() => import('./Elements/Cost-element/cost')); // Lazy load
function Software() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className='col' sm={1}>
                        {' '}
                        {/* Todo: hide this on smaller screen */}
                        <h6>Left</h6>
                        {/* <MainAccordeon /> */}
                    </Col>
                    <Col className='col'>
                        <Header
                            title='Cost section'
                            subtitle='Cost subsection'
                            link1='costsummary'
                            linkname1='Cost Summary'
                        />{' '}
                        {/* to be replaced by dynamic header */}
                        <Suspense fallback={<Wait />}>
                            <Cost />
                        </Suspense>{' '}
                        {/* Only shows Cost page once loaded */}
                    </Col>
                    <Col className='col' sm={1}>
                        {' '}
                        {/* Todo: hide this on smaller screen */}
                        <h6>Right</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Software;


