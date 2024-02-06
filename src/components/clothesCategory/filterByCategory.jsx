import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './category.css';
import {categoryContext } from "../Context/provider";
import { category , colors, size, brand} from '../Context/data';

const FilterByCategory = () =>{
    const {handleSearch} = React.useContext(categoryContext);
    const  [filterState , setFilterState] = React.useState({
      category: "-1",
      size: "-1", 
      brand: "-1",
      color: "-1",
      gender:"-1",
      sort:"-1"
   });
   const handleClick = (term,index)=>{
    if(term==="subCategory")
      {
        filterState.category = index;
        setFilterState(filterState);
        console.log(filterState);
      }
    if(term==="size")
      {
        filterState.size = index;
        setFilterState(filterState);
        console.log(filterState);
      }
    if(term==="brand")
      {
        filterState.brand = index;
        setFilterState(filterState);
        console.log(filterState);
      }
    if(term==="color")
      {
        filterState.color = index;
        setFilterState(filterState);
        console.log(filterState);
      }
    if(term==="gender")
      {
        filterState.gender = index;
        setFilterState(filterState);
        console.log(filterState);
      }
    if(term==="price")
      {
        filterState.sort = index;
        setFilterState(filterState);
        console.log(filterState);
      }
   }
    return (
        <div className='filterList'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {category.map((i,index)=>{
            return(<Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}} 
            onClick={()=>{handleSearch("subCategory",i.filter.subCategory);handleClick("subCategory",index)}} key={index} name="category">{i.name}
            {filterState.category==index ? <i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}
            </Button>)
          })}

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sizes</Typography>

        </AccordionSummary>
        <AccordionDetails>
          {size.map((i,index)=>{
            return(<Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("size",i);handleClick("size",index)}} key={index} name="size">{i}
            {filterState.size==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}
            </Button>)
          })}
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {brand.map((i,index)=>{
            return(<Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("brand",i);handleClick("brand",index)}} key={index} name="brand">{i} 
            {filterState.brand==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}
            </Button>)
          })}
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {colors.map((i,index)=>{
            return(<Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("color",i);handleClick("color",index)}} key={index} name="color">{i} 
            {filterState.color==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}
            </Button>)
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("gender","Men");handleClick("gender",0)}} name="gender">
            Male 
            {filterState.gender==0?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}

          </Button>
          <Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("gender","Women");handleClick("gender",1)}} name="gender">
            female
            {filterState.gender==1?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}

          </Button>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sort by</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("price","1");handleClick("price",0)}} name="sort">
            Low to High 
            {filterState.sort==0?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}

          </Button>
          <Button className='btncomponent focus:active:hover:bg-emerald-200' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("price","-1");handleClick("price",1)}} name="sort">
            High to Low
            {filterState.sort==1?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null}

          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}
export default FilterByCategory;