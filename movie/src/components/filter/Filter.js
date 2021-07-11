import React from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';

const Filter = () => 
    <Col xs={3}>
        <Card className={['w-100', 'mb-3']}>
            <ListGroup.Item className={'d-flex'}>
                <span>Sort</span>
            </ListGroup.Item>
            <ListGroup.Item>
                Sort results by
            </ListGroup.Item>
        </Card>
        <Card className="w-100">
            <Card.Body>
                <span>Filter</span>
            </Card.Body>
        </Card>
    </Col>

export default Filter