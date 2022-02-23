import React, { useEffect, useRef, useState, Fragment } from "react";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import {
  CardTitle,
  Card,
  CardBody,
  Table,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  Button,
} from "reactstrap";
import { nanoid } from "nanoid";

export function App() {
  //Declarar e inicializar lista de foods
  const [foods, setFoods] = useState([]);

  //Referencia a la db
  const foodsCollectionRefs = collection(db, "data");

  //Para filtrar
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //Para que la vista se renderice a la tabla de foods
  useEffect(() => {
    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);

      console.log(data);
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFoods();
  }, []);



  const [newName, setNewName] = useState("");
  const [newFoodGroup, setNewFoodGroup] = useState("");
  const [newEnergy, setNewEnergy] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(foodsCollectionRefs, {
      Name: newName,
      FoodGroup: newFoodGroup,
      Energy: Number(newEnergy),
    });

    setNewName("");
    setNewFoodGroup("");
    setNewEnergy(0);
  };

  //creación del nuevo nombre cuando le damos al botón
  const handleChangeName = (event) => {
    
    setNewName(event.target.value);
  };

  //creación del nuevo food group
  const handleChangeFoodGroup = (event) => {
    
    setNewFoodGroup(event.target.value);
  };

  //creación de la nueva energy
  const handleChangeEnergy = (event) => {
    
    setNewEnergy(event.target.value);
  };

  //MODAL
  //Abrir y cerrar el modal de añadir alimento

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <div className="content">
      <Button
        className="btn-round btn-icon btn"
        color="success"
        onClick={handleShow}
      >
        <i className="nc-icon nc-simple-add"></i>
      </Button>

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
                  {foods
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.Name?.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((food, index) => (
                      <tr key={index}>
                        <th>{food.Name}</th>
                        <th>{food.FoodGroup}</th>
                        <th>{food.FoodSubgroup}</th>
                        <th>{food.Country}</th>
                        <th>{food.Energy}</th>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>

          <Modal isOpen={show}>
            <ModalHeader>Añadir Alimento</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmit}>
                <input
                  placeholder="Name..."
                  type="text"
                  value={newName}
                  onChange={handleChangeName}
                />
                <input
                  placeholder="Food group..."
                  type="text"
                  value={newFoodGroup}
                  onChange={handleChangeFoodGroup}
                />
                <input
                  type="number"
                  placeholder="Energy"
                  value={newEnergy}
                  onChange={handleChangeEnergy}
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
              <Button onClick={handleClose} color="success">
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}
