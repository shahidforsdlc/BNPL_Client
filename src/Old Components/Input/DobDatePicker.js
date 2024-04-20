import React, { useEffect, useState,forwardRef,useRef } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";


const DobDatePicker = (props) => {
 //Variables
  const[startdate,setStartDate]= useState(new Date());
  const [value,setValue]=useState(moment())
  const [maxDate, setMaxdate] = useState();
  const [minDate, setMinDate] = useState();
 
  useEffect(()=>{
 
   if(props.value){
    
    let p  = props.value.split("/").reverse().join("-");
    setValue(p)
   }
  },[props.value])

  const inputRef= null;


 //Setting min and max date(18 years validation)
  useEffect(() => {
    let d = new Date(moment().subtract(18, "years")._d);
    setMaxdate(parseInt(d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear());
    setStartDate(moment(d).format("DD/MM/YYYY"));
    
    let d2 = new Date(moment().subtract(500, "years")._d);
    setMinDate(parseInt(d2.getMonth() + 1) + "-" + d2.getDate() + "-" + d2.getFullYear());
  }, []);

  //Onchange Date
  const onChangeDob = (d) => {

     props.func(d);
  };

  const CustomInput = ({ value, onClick }) => (
    <div 
    className={`custom-datepicker  h-[45px]  border-0 border-white  pl-2 pt-2
     ${props.error ? 'border-red' : 'border-gray'}
     ${props.disabled? "background-lightgray":""} 
     focus:outline-none focus:ring-0 text-black`}
     onClick={onClick}>
      <input type="text" value={value} readOnly placeholder={`Select ${props.label}`}
      className="outline-none  text-black"
    
     />
      <AiOutlineCalendar className="calendar-icon" />
    </div>
  );
 
  return (
<div class="relative  flex flex-col  mt-[2px]">
      <label
        id={`lbl${props.id}`}
        for={props.id}
        className="  text-[15px] font-semibold text-black "
      >
       {props.label} <span className="text-red-500">*</span> 
      </label>
      
<DatePicker
      customInput={<CustomInput />}
      disabled={props.disabled}
      dateFormat="dd/MM/yyyy"
      selected={props.value?new Date(value):null}
      id={props.id}
      name={props.name}
      onChange={(e) => {
    
       if(e instanceof Date && !isNaN(e)){
       const d = new Date(e).toLocaleDateString('fr-FR');
       props.func(d)
      onChangeDob(d);
      }
      else{
       console.log("no date",e)
       props.func2(e)
      }
     }}
     showMonthDropdown
     showYearDropdown
     scrollableYearDropdown
     yearDropdownItemNumber={150}
     minDate={new Date(minDate)}
     maxDate={new Date(maxDate)}
    
     

    />
   {/* </div> */}
    </div>
  );
};

export default DobDatePicker;
