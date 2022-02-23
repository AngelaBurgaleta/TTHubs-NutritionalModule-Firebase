import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Collapse,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
} from "reactstrap";

export function FoodTable(props) {
  //manejador para filtrar por nombre del alimento

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

 
  return (
    <>
      <html class="nav-open">
        <body class="perfect-scrollbar-on">
          <div class="main-panel ps ps--active-y">
            <Navbar expand="lg" className="navbar-absolute fixed-top">
              <div class="container-fluid">
                <div class="navbar-wrapper">
                  <div class="navbar-brand">Nutritional Profile Module</div>
                </div>
              </div>

              <div class="justify-content-end collapse navbar-collapse">
                <form>
                  <InputGroup className="no-border">
                    <Input
                      id="search"
                      type="text"
                      placeholder="filtros aqui"
                      onChange={handleSearch}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText></InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Button
                      className="btn-round btn-icon btn"
                      //className="nc-icon nc-simple-add"
                      color="success"
                      onClick={props.handleShow}
                    ><i
                      className="nc-icon nc-simple-add">
                      </i>
                      </Button>
                  </li>
                </ul>
              </div>
            </Navbar>

            <div className="content">
              <Row>
                <Col md="12">
                  <form>
                    <InputGroup className="no-border">
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search by name..."
                        onChange={handleSearch}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                  <Card>
                    <CardBody>
                      <Table striped>
                        <thead className="text-success">
                          <tr>
                            <th>Name</th>
                            <th>Food Group</th>
                            <th>Food Subgroup</th>
                            <th>Country</th>
                            <th>Energy (Kcal/KJ)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.foods
                            .filter((val) => {
                              if (props.search === "") {
                                return val;
                              } else if (
                                val.Name.toLowerCase().includes(
                                  search.toLowerCase()
                                )
                              ) {
                                return val;
                              }
                            })
                            .map((food, index) => (
                              <tr key={index}>
                                <td>{food.Name}</td>
                                <td>{food.FoodGroup}</td>
                                <td>{food.FoodSubgroup}</td>
                                <td>{food.Country}</td>
                                <td>{food.Energy}</td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>

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
          </div>
        </body>
      </html>
    </>
  );
}
