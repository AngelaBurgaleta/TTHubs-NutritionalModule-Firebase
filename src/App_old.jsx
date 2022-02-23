import React, { useState, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import data from "./components/mock-data.json";
//import { AddFood } from "./components/AddFood";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from "./firebase/firebaseConfig"

import {
  Card,
  Container,
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
  Navbar,
} from "reactstrap";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import { FoodTable } from "./components/FoodTable";
import { Sidebar } from "./components/Sidebar";


import { Navigation } from "components/Navigation";
//import { Mock_table } from "components/pages/Mock_table";

export function App() {
  const foodCollectionRef = collection(db, "data");
  
  const [foods, setFoods] = useState(foodCollectionRef);

  

  const addFormData = useRef({
    Name: "",
    FoodGroup: "",
    FoodSubgroup: "",
    Country: "",
    Energy: "",
    TotalProteins: "",
    TotalCarbos: "",
    TotalSugars: "",
    TotalLipids: "",
  });

  //manejador para añadir datos al formulario
  const handleAddFormChange = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const fieldName = event.target.getAttribute("name"); //devuelve la clave del atributo que queramos añadir
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData.current }; //nuevo formulario copia el form anterior
    newFormData[fieldName] = fieldValue;

    addFormData.current = newFormData; //current cuando se usa UseRef

    console.log(newFormData);
  };

  //agregar datos a la tabla.
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    console.log(event)
    

    //crear nuevo objeto con los datos que ha almacenado el usuario
    const newFood = {
      id: nanoid(),
      Name: addFormData.current.Name,
      FoodGroup: addFormData.current.FoodGroup,
      FoodSubgroup: addFormData.current.FoodSubgroup,
      Country: addFormData.current.Country,
      Energy: addFormData.current.Energy,
      TotalProteins: addFormData.current.TotalProteins,
      TotalCarbos: addFormData.current.TotalCarbos,
      TotalSugars: addFormData.current.TotalSugars,
      TotalLipids: addFormData.current.TotalLipids,
    };

    const newFoods = [...foods, newFood];
    setFoods(newFoods);
    
    console.log(newFood);
  };

  //Abrir y cerrar el modal de añadir alimento

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
//mostrar ocultar sidebar
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

//nav bar side
  function NotFound() {
    return (<div class="main-panel ps">Página no encontrada</div>);
  }

  //FUNCIONAL
  return (
    <Fragment>
      <Router>
        
        <div>
          
          
            
            <Sidebar />
            <div className="content w-100">
              <Switch>
                
                <Route path="/statistics" exact={true} component={Statistics} />
                <Route
                  path="/foodtable"
                  component={() => (
                    <FoodTable
                      foods={foods}
                      setFoods={setFoods}
                      handleAddFormChange={handleAddFormChange}
                      handleAddFormSubmit={handleAddFormSubmit}
                      show={show}
                      setShow={setShow}
                      handleShow={handleShow}
                      handleClose={handleClose}
                    />
                  )}
                />

                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        
      </Router>
    </Fragment>
    
  );
 

  
}
