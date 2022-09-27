import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function List() {
    return (
        <>
            <p>day la todo app</p>
            <Form className="container w-50">

                <InputGroup className="mb-2 row mx-5">
                    <Form.Label>
                        Input:
                    </Form.Label>
                    <Form.Control className="col-md-8"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <Button className="col-md-2 " variant="primary">Thêm</Button>{' '}
                </InputGroup>
            </Form>


        </>
    );
}
export default List;