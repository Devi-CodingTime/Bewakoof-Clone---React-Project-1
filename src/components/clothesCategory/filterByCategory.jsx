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
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}} 
            onClick={()=>{handleSearch("subCategory",i.filter.subCategory)}} key={index}>{i.name}
            {/* {click==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null} */}
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
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("size",i)}} key={index}>{i}
            {/* {click==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null} */}
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
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("brand",i)}} key={index}>{i} 
            {/* {click==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null} */}
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
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("color",i)}} key={index}>{i} 
            {/* {click==index?<i className="fa-solid fa-circle fa-rotate-by" style={{color: "#42a2a2"}}></i>:null} */}
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
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("gender","Men")}}>
            Male
          </Button>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("gender","Women")}}>
            female
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}>
            4.5 and above
          </Button>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}>
           4 and above 
          </Button>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}>
           3.5 and above 
          </Button>
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sort by</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("price","1")}}>
            Low to High 
          </Button>
          <Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
          onClick={()=>{handleSearch("price","-1")}}>
            High to Low
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}
export default FilterByCategory;