'use client';
import React, { useState } from 'react';
import Destinations from '../components/Destinations';
import HotDeals from '../components/HotDeals';
import TimePrice from '../components/TimePrice';
import PrimePage from '../components/PrimePage';
import Popular from '../components/Popular';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from '../components/Nav';
import About from './About';

const Hero: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className='max-w-[1100px] mx-auto'>
        <Nav/>
        <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
        <PrimePage/>
        <HotDeals/>
        <Destinations/>
        <TimePrice/>
        <Popular/>
        {/* <About/> */}
    </div>
  );
}

export default Hero;