import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import { FoodTable } from "./FoodTable";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

 

//Componente separado de AddFood abriendo un modal

export function AddFood(props) {

  

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Button color="success" onClick={props.handleShow}>
            Añadir Alimento
          </Button>
          <Modal isOpen={props.show}>
            <ModalHeader>Añadir Alimento</ModalHeader>
            <ModalBody>
              <Form onSubmit={props.handleAddFormSubmit}>
                <input
                  type="text"
                  name="Name"
                  required="Required"
                  placeholder="Enter a name"
                  onChange={props.handleAddFormChange}
                />

                <input
                  type="text"
                  name="FoodGroup"
                  required="Required"
                  placeholder="Enter the food group"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="FoodSubgroup"
                  required="Required"
                  placeholder="Enter the food subgroup"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="Country"
                  required="Required"
                  placeholder="Enter the Country"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="Energy"
                  required="Required"
                  placeholder="Enter energy (Kcal)"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalProteins"
                  required="Required"
                  placeholder="Enter total proteins"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalCarbos"
                  required="Required"
                  placeholder="Enter total carbohydrates"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalSugars"
                  required="Required"
                  placeholder="Enter total sugars"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalLipids"
                  required="Required"
                  placeholder="Enter total lipds"
                  onChange={props.handleAddFormChange}
                />
                <Button
                  color="success"
                  className="nc-icon nc-simple-add"
                  type="submit"
                >
                  <em></em>
                </Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button onClick={props.handleClose} color="success">
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </div>
  );
/*
  return (
    <div className="content">
      <Row>
        <Col md="12">
        <Button color="success" onClick={props.handleShow}>
            Añadir Alimento
          </Button>
              <Form onSubmit={props.handleAddFormSubmit}>
                <input
                  type="text"
                  name="Name"
                  required="Required"
                  placeholder="Enter a name"
                  onChange={props.handleAddFormChange}
                />

                <input
                  type="text"
                  name="FoodGroup"
                  required="Required"
                  placeholder="Enter the food group"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="FoodSubgroup"
                  required="Required"
                  placeholder="Enter the food subgroup"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="Country"
                  required="Required"
                  placeholder="Enter the Country"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="Energy"
                  required="Required"
                  placeholder="Enter energy (Kcal)"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalProteins"
                  required="Required"
                  placeholder="Enter total proteins"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalCarbos"
                  required="Required"
                  placeholder="Enter total carbohydrates"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalSugars"
                  required="Required"
                  placeholder="Enter total sugars"
                  onChange={props.handleAddFormChange}
                />
                <input
                  type="text"
                  name="TotalLipids"
                  required="Required"
                  placeholder="Enter total lipds"
                  onChange={props.handleAddFormChange}
                />
                <Button
                  color="success"
                  className="nc-icon nc-simple-add"
                  type="submit"
                >
                  <em></em>
                </Button>
              </Form>
              <Button onClick={props.handleClose} color="success">
                Cerrar
              </Button>
              <Button onClick={props.handleClose} color="success">
                Cerrar
              </Button>
        </Col>
      </Row>
    </div>
  );*/
}
