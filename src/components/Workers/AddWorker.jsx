import React, { useState,Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
//import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
/*  const [entertedWorkerName, setEnteredWorkerName] = useState("");
 const [enteredWage, setEnteredWage] = useState(""); */
  const [error,setError] = useState();
  const myForm =  useRef();

  const nameInputRef = useRef();
  const wageInputRef = useRef();


  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    if (
        nameInputRef.current.value.trim().length === 0 )
   
     {
        setError({
            title:"Isim Alani Zorunludur",
            message:"Lutfen bir isim giriniz.."
          })
      return;
    }
    if (
        +wageInputRef.current.value < minimumWage)

     {
        setError({
            title:"Maas Alani Zorunludur",
            message:`Lutfen  ${minimumWage} degerinden buyuk bir maas degeri giriniz .. `
          })
        
      return;
    }

   // setEnteredWorkerName("");
  //  setEnteredWage("");
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        wage: enteredWage,  //ref set ederken hep sorun cikarihyor o yuzden yukari const olusuturup cagiricam buraya boye yazmistik ilk wageInputRef.current.value,
        name: enteredName,   // ama sonra gitti degistirdik . 
      },
      ...prevState,
    ]);
    nameInputRef.current.value="";
    wageInputRef.current.value="";

   // console.log(entertedWorkerName, enteredWage);
  };

  const errorHandler = () =>{
    setError(null)

  }

  return (
    <Fragment>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />} 
      <Card className="m-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler} ref={myForm}>
          <label htmlFor="name" className="font-medium mx-auto">
            Calisan Ismi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto text-center border p-2"
            id="name"
            placeholder="Calisan ismi giriniz "
           // onChange={(e) => setEnteredWorkerName(e.target.value)}
            //value={entertedWorkerName}
            ref={nameInputRef}
          />
          <label htmlFor="wage" className="font-medium  mx-auto">
            Maas Miktari
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto text-center border p-2"
            id="wage"
            placeholder="Maas Giriniz"
          //  onChange={(e) => setEnteredWage(e.target.value)}
           // value={enteredWage}
            ref={wageInputRef}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddWorker;
//eger error varsa yani o title lar message yani error varsa bu modali goster bana  ICI DOLU ISE GELSIN ... 
//error eger true ose sen erromodal vagir . 