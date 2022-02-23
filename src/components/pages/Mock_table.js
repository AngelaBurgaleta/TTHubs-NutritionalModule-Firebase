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
} from "reactstrap";

export function Mock_table(props) {
  //manejador para filtrar por nombre del alimento

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nutritional Module</CardTitle>
              </CardHeader>
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
                    {props.foods.map((food, index) => (
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
          </Col>
        </Row>
      </div>
    </>
  );

  /* //funcional
return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nutritional Module</CardTitle>
              </CardHeader>
              <CardBody>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name..."
                  onChange={handleSearch}
                />

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
                    {props.foods.filter(val => {
                      if (props.search === "") {
                        return val;
                      }else if(
                        val.Name.toLowerCase().includes(search.toLowerCase())
                      ){
                        return val;
                      }
                    }).map((food, index) => (
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
          </Col>
        </Row>
      </div>
    </>
  );
  */
}
