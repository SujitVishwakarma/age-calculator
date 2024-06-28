import React, { useState } from 'react'
import './age.css'
import imgage from '../components/illu.jpg'
const Age = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');
  const [ageYears, setAgeYears] = useState(null);
  const [ageMonths, setAgeMonths] = useState(null);
  const [ageDays, setAgeDays] = useState(null);

  const calCulateAge =()=>{
    const birthDate = new Date(year, month-1, day);
    const today = new Date();

    let calculatedYear = today.getFullYear()-birthDate.getFullYear();
    let calculatedMonths = today.getMonth()-birthDate.getMonth();
    let calculatedDay = today.getDate()-birthDate.getDate();
    if(calculatedDay < 0 ){
      calculatedMonths--;
      calculatedDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if(calculatedMonths< 0){
      calculatedYear--;
      calculatedMonths += 12;
    }
    setAgeYears(calculatedYear);
    setAgeMonths(calculatedMonths);
    setAgeDays(calculatedDay);
  }

  return (
    <div className='main-container'>
      <div className='first'>
        <h2>AGE CALCULATOR</h2>
        <img src={imgage} alt='iconImg' />
      </div>
       {/* second part  */}
       <div className="container">
      <div className="input-section">
        <h2>Your Date Of Birth</h2>
        <div className="inputs">
          <div className="input-group">
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min="1"
              max="31"
              placeholder="DD"
            />
            <span>Day</span>
          </div>
          <div className="input-group">
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              min="1"
              max="12"
              placeholder="MM"
            />
            <span>Month</span>
          </div>
          <div className="input-group">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max={new Date().getFullYear()}
              placeholder="YYYY"
            />
            <span>Year</span>
          </div>
        </div>
      </div>
      <button type="button" onClick={calCulateAge}>
        Calculate Age
      </button>
      <div className="output-section">
        <h2>Your Age Till Today</h2>
        {ageYears !== null && ageMonths !== null && ageDays !== null && (
          <div className="output">
            <div className="output-group">
              <span>{ageYears}</span>
              <p>Years</p>
            </div>
            <div className="output-group">
              <span>{ageMonths}</span>
              <p>Months</p>
            </div>
            <div className="output-group">
              <span>{ageDays}</span>
              <p>Days</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Age
