import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './category.css';
import {categoryContext } from "../Context/provider";
import { category } from '../Context/data';

const FilterByCategory = () =>{
    const {handleSearch} = React.useContext(categoryContext);
    let colors = ["GREEN","CREAM","ORANGE","BLUE","BROWN","GREY","RED","YELLOW","WHITE","BLACK","OLIVE",
    "MAROON","PURPLE","BEIGE","PINK","MULTICOLOR","CHARCOAL","SILVER"];
    
    // const category = ["jogger","jeans","Kurta","Kurti","Sweater","Shirt","T Shirt","Hoodie","JumpSuit",
    // "Tracksuit","Shorts","Pyjamas"];

    const size= ["S","M","L","XL","XXL"];
    const brand = ["Bewakoof®","TISTABENE","7 Shores","Campus Sutra",
    "Style Quotient","Breakbounce","Chkokko","XYXX","Rigo","Alstyle",
    "Brown Mocha","Hubberholme","CHIMPAAANZEE","Smugglerz","Blue Tyga",
    "TALES and STORIES","Belliskey","ANGEL FAB","Kotty","Belliskey",
    "Thomas Scott","Old Grey","BLANCK","Urban Scottish","THE DAILY OUTFITS",
    "TrueBuyWorld","INDICLUB","OFFICIAL TOM & JERRY MERCHANDISE","Bewakoof Air® 1.0",
    "OFFICIAL CARTOON NETWORK MERCHANDISE","Mad Over Print","Lounge Dreams"];

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
          {category.map((i)=>{
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}} 
            onClick={()=>{handleSearch("subCategory",i.filter.subCategory)}}>{i.name}</Button>)
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
          {size.map((i)=>{
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("size",i)}}>{i}</Button>)
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
          {brand.map((i)=>{
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("brand",i)}}>{i}</Button>)
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
          {colors.map((i)=>{
            return(<Button className='btncomponent' style={{display:"block",fontSize:"10px",color:"grey"}}
            onClick={()=>{handleSearch("color",i)}}>{i}</Button>)
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