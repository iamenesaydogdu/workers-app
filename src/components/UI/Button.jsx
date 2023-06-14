const Button = (props) => {
    return (
      <button
        className={`p-2 text-lg bg-teal-700 text-white ${props.className}`}
        type={props.type || "button"} // props type buttondan al ama type eger yoksa button girsin devreye burda yazdigim type olarak. 
        onClick={props.onClick}
     >
        {props.children}
      </button>
    );
  };
  
  export default Button;
  