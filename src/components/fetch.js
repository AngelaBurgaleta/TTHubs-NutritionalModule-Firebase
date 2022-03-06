//https://www.youtube.com/watch?v=xu-gf2kFxao 8.36
import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export function FoodTable() {
  //Declarar e inicializar lista de foods
  const [foods, setFoods] = useState([]);

  //Referencia a la db
  const foodsCollectionRefs = collection(db, "data");

  //PAGINACION
  /*
  const btnNext = document.createElement('button');
  btn.innerText = 'Next Page';
  document.body.append(btn)

  let lastDocument: any = null;
  btnNext.addEventListener('click', () => {
    const query = foodsCollectionRefs
    .orderBy('Nombre')
    .startAfter(lastDocument)

    query.limit(2).get().then( snap => {
      lastDocument = snap.docs[snap.docs.length -1] ||

      retornaDocumentos(snap)
    })
  })


  btn.addEventListener('click', () => {
    console.log('click')
  })
  ------------------------------

  
  const botonSiguiente = document.getElementById('botonSiguiente')
  const botonAnterior = document.getElementById('botonAnterior')
  const contenedorCards = document.getElementById('cards')

  //Evento cada vez que cambia un valor de la bbdd
  //snapshot es comom la captura
  db.collection('data').onSnapshot((snapshot) =>
  //console.log(snapshot.docs[0].data())
  cargarDocumentos(snapshot.docs)

})


//por cada usuario queremos agregar una card (?)
const cargarDocumentos = () => {
  if(cargarDocumentos.length > 0) {
    cargarDocumentos.forEach(documento => {
      contenedorCards.innerHTML += `
      
      `;

    })
  }

}
*/

  //ORDENAR ALFABÉTICAMENTE
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foods].sort((a, b) =>
        a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1
      );
      setFoods(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foods].sort((a, b) =>
        a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1
      );
      setFoods(sorted);
      setOrder("ASC");
    }
  };

  //FILTRAR POR NOMBRE
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

  //-------------------------------------------------

  //AÑADIR campos para el formulario
  const [newName, setNewName] = useState("");
  const [newFoodGroup, setNewFoodGroup] = useState("");
  const [newEnergy, setNewEnergy] = useState(0);
  const [newFoodSubgroup, setNewFoodSubgroup] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newTotalCarbos, setNewTotalCarbos] = useState(0);
  const [newTotalProteins, setNewTotalProteins] = useState(0);
  const [newTotalLipids, setNewTotalLipids] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(foodsCollectionRefs, {
      Name: newName,
      FoodGroup: newFoodGroup,
      FoodSubgroup: newFoodSubgroup,
      Country: newCountry,
      Energy: Number(newEnergy),
      TotalCarbos: Number(newTotalCarbos),
      TotalProteins: Number(newTotalProteins),
      TotalLipids: Number(newTotalLipids),
    });

    setNewName("");
    setNewFoodGroup("");
    setNewFoodSubgroup("");
    setNewCountry("");
    setNewEnergy(0);
    setNewTotalCarbos(0);
    setNewTotalProteins(0);
    setNewTotalLipids(0);

    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);

      console.log(data);
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFoods();
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

  const handleChangeCountry = (event) => {
    setNewCountry(event.target.value);
  };

  const handleChangeTotalCarbos = (event) => {
    setNewTotalCarbos(event.target.value);
  };

  const handleChangeTotalLipids = (event) => {
    setNewTotalLipids(event.target.value);
  };

  const handleChangeTotalProteins = (event) => {
    setNewTotalProteins(event.target.value);
  };

  const handleChangeFoodSubgroup = (event) => {
    setNewFoodSubgroup(event.target.value);
  };

  //---------------------------------------

  //ELIMINAR---------------------------

  const deleteFood = async (food) => {
    //const FoodDoc = await getDocs(db, "data", id);

    //await deleteDoc(FoodDoc);
    await deleteDoc(doc(db, "data", food.id));
    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);

      console.log(data);
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFoods();
  };

  //-----------------------------------------

  //ACTUALIZAR--------------------------- YOUTUBE

  const [modalShow, setModalShow] = useState(false)
  const {Name, FoodSubgroup} = value;
  const[update,setUpdata] = useState({})
  const [allDocs, setAllDocs] = useState([])
  const [singleDoc, setSingleDoc] = useState({});
  const {daata} 

  function fetchAll(e) {

  }

  function fetchSingle(e){

  }

  useEffect(() => {
    fetchAll()

  }, [])

  const handleChange = (name) => (e) => {
    e.preventDefault();
    setValue({ ...value, [name]: e.target.value });
  };

 

  const updateDocFood = () => {
    FoodName: "",
    FoodGroup: "",
    FoodSubgroup: "",
    Country: "",
    Energy: 0,
    TotalCarbos:0, 
    TotalProteins:0, 
    TotalLipids: 0,

  }

  const [value, setValue] = useState({
    name: daata.name,
    

  });

  const updateForm = document.querySelector(".update");
  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef = doc(db, "data", updateForm.id.value);

    updateDoc(docRef, {
      Name: "updated Name",
      FoodGroup: newFoodGroup,
      FoodSubgroup: newFoodSubgroup,
      Country: newC ountry,
      Energy: Number(newEnergy),
      TotalCarbos: Number(newTotalCarbos),
      TotalProteins: Number(newTotalProteins),
      TotalLipids: Number(newTotalLipids),
    }).then(() => {
      updateForm.reset();
    });
  });

  //---------------------------------------

  //MODAL
  //Abrir y cerrar el modal de añadir  alimento

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <>
      <html class="nav-open">
        <body class="perfect-scrollbar-on">
          <div class="main-panel ps ps--active-y">
            <Navbar expand="lg" className="navbar-absolute fixed-top">
              <div class="container-fluid">
                <div class="navbar-wrapper">
                  <div class="row">
                    <div class="navbar-brand">Food Table</div>
                  </div>
                </div>

                <div class="justify-content-end collapse navbar-collapse">
                  <button class="btn-round btn btn-warning btn-sm">
                    Light
                  </button>
                  <button class="btn-round btn btn-warning btn-sm">
                    Gluten free
                  </button>
                </div>

                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Button
                      className="btn-round btn-icon btn"
                      color="success"
                      onClick={handleShow}
                    >
                      <i className="nc-icon nc-simple-add"></i>
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
                  <Card id="cards">
                    <CardBody>
                      <Table striped>
                        <thead className="text-success">
                          <tr>
                            <th onClick={() => sorting("Name")}>Name</th>
                            {/*<Button onClick={() => sorting("Name")}>Ordenar</Button>*/}
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
                                val.Name?.toLowerCase().includes(
                                  search.toLowerCase()
                                )
                              ) {
                                return val;
                              }
                            })
                            .map((food) => (
                              <tr key={food.id}>
                                <th>{food.Name}</th>

                                <th>{food.FoodGroup}</th>
                                <th>{food.FoodSubgroup}</th>
                                <th>{food.Country}</th>
                                <th>{food.Energy}</th>
                                <div class="card-body">
                                  <Button
                                    className="btn-icon btn-link edit btn btn-danger btn-sm"
                                    onClick={() => deleteFood(food)}
                                  >
                                    <i class="fa fa-times"></i>
                                  </Button>
                                  <em> </em>
                                  <Button
                                    className="btn-icon btn-link edit btn btn-info btn-sm"
                                    onClick={() => {
                                      setUpdata(food.data)
                                    setModalShow(true)
                                    }}
                                    
                                  >
                                    <i className="fa fa-edit"></i>
                                  </Button>
                                </div>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </CardBody>

                    <CardFooter>
                      <nav class aral-label="pagination">
                        <div class="row">
                          <div class="col-sm-5"></div>
                          <div class="col-sm-4">
                            <ul class="pagination text-center">
                              <li class="page-item">
                                <a arial-label="Previous" class="page-link">
                                  <span aria-hidden="true" color="success">
                                    <i
                                      aria-hidden="true"
                                      class="fa fa-angle-double-left"
                                    ></i>
                                  </span>
                                </a>
                              </li>
                              <li class="page-item">
                                <a href="#pablo" class="page-link">
                                  1
                                </a>
                              </li>
                              <li class="page-item">
                                <a href="#pablo" class="page-link">
                                  2
                                </a>
                              </li>
                              <li class="page-item" color="success">
                                <a href="#pablo" class="page-link">
                                  3
                                </a>
                              </li>

                              <li class="page-item">
                                <a arial-label="Next" class="page-link">
                                  <span aria-hidden="true">
                                    <i
                                      aria-hidden="true"
                                      class="fa fa-angle-double-right"
                                    ></i>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </CardFooter>
                  </Card>

                  <Modal isOpen={show}>
                    <ModalHeader>Añadir Alimento</ModalHeader>

                    <ModalBody>
                      <Form onSubmit={handleSubmit}>
                        <CardBody>
                          <div class="row">
                            <div class="col-md-6">
                              <label>Food Name *</label>
                              <div class="form-group">
                                <Input
                                  required
                                  type="text"
                                  value={newName}
                                  onChange={handleChangeName}
                                />
                              </div>
                              <label>Food Group</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={newFoodGroup}
                                  onChange={handleChangeFoodGroup}
                                />
                              </div>
                              <label>Food Subgroup</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={newFoodSubgroup}
                                  onChange={handleChangeFoodSubgroup}
                                />
                              </div>
                              <label>Country</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={newCountry}
                                  onChange={handleChangeCountry}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <label>Energy</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newEnergy}
                                  onChange={handleChangeEnergy}
                                />
                              </div>
                              <label>Total Carbos</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalCarbos}
                                  onChange={handleChangeTotalCarbos}
                                />
                              </div>
                              <label>Total Proteins</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalProteins}
                                  onChange={handleChangeTotalProteins}
                                />
                              </div>
                              <label>Total Lipids</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalLipids}
                                  onChange={handleChangeTotalLipids}
                                />
                              </div>
                            </div>
                          </div>
                        </CardBody>
                        <CardFooter>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form group">
                                <Button
                                  type="submit"
                                  color="info"
                                  class="btn-round btn btn-info"
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                            <div class="form group">
                              <Button
                                color="danger"
                                class="btn-round btn btn-info"
                                onClick={handleClose}
                              >
                                Close
                              </Button>
                            </div>
                          </div>
                        </CardFooter>
                      </Form>
                    </ModalBody>
                  </Modal>

                  <Modal show={modalShow} onHide={() =>setModalShow(false)} data={updata}>
                    <ModalHeader>Actualizar Alimento</ModalHeader>

                    <ModalBody>
                      <Form onSubmit={updateDocFood}>
                        <CardBody>
                          <div class="row">
                            <div class="col-md-6">
                              <label>Food Name *</label>
                              <div class="form-group">
                                <Input
                                  required
                                  type="text"
                                  value={Name}
                                  onChange={()=>{handleChange('Name') }}
                                />
                              </div>
                              <label>Food Group</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={FoodGroup}
                                  onChange={handleChange('FoodGroup') }
                                />
                              </div>
                              <label>Food Subgroup</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={newFoodSubgroup}
                                  onChange={handleChangeFoodSubgroup}
                                />
                              </div>
                              <label>Country</label>
                              <div class="form-group">
                                <Input
                                  type="text"
                                  value={newCountry}
                                  onChange={handleChangeCountry}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <label>Energy</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newEnergy}
                                  onChange={handleChangeEnergy}
                                />
                              </div>
                              <label>Total Carbos</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalCarbos}
                                  onChange={handleChangeTotalCarbos}
                                />
                              </div>
                              <label>Total Proteins</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalProteins}
                                  onChange={handleChangeTotalProteins}
                                />
                              </div>
                              <label>Total Lipids</label>
                              <div class="form-group">
                                <Input
                                  type="number"
                                  min="0"
                                  value={newTotalLipids}
                                  onChange={handleChangeTotalLipids}
                                />
                              </div>
                            </div>
                          </div>
                        </CardBody>
                        <CardFooter>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form group">
                                <Button
                                  type="submit"
                                  color="info"
                                  class="btn-round btn btn-info"
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                            <div class="form group">
                              <Button
                                color="danger"
                                class="btn-round btn btn-info"
                                onClick={handleClose}
                              >
                                Close
                              </Button>
                            </div>
                          </div>
                        </CardFooter>
                      </Form>
                    </ModalBody>
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
