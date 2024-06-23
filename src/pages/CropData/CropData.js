import React, { useEffect, useState } from 'react';
import { Table, Container, Title } from '@mantine/core';
import './CropData.css'; // Import your CSS file if needed

const fetchData = async () => {
  const response = await fetch('/IndianA.json');
  const data = await response.json();
  return data;
};

const processCropData = (data) => {
  const processedData = {};

  data.forEach(({ Year, "Crop Name": crop, "Crop Production (UOM:t(Tonnes))": production }) => {
    const year = Year.split(', ')[1];
    production = parseFloat(production) || 0; // Set to 0 if undefined or NaN
    if (!processedData[year]) {
      processedData[year] = { max: { crop, production }, min: { crop, production } };
    } else {
      if (production > processedData[year].max.production) {
        processedData[year].max = { crop, production };
      }
      if (production < processedData[year].min.production) {
        processedData[year].min = { crop, production };
      }
    }
  });

  return Object.entries(processedData).map(([year, { max, min }]) => ({
    year,
    maxCrop: max.crop,
    maxProduction: max.production,
    minCrop: min.crop,
    minProduction: min.production,
  }));
};

const CropData = () => {
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      const processed = processCropData(data);
      setCropData(processed);
    };
    loadData();
  }, []);

  return (
    <Container className="table-container">
      <Title order={2}>Crop Data</Title>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production in that Year</th>
            <th>Crop with Minimum Production in that Year</th>
          </tr>
        </thead>
        <tbody>
          {cropData.map(({ year, maxCrop, maxProduction, minCrop, minProduction }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{maxCrop} , 
              {maxProduction}</td>
              <td>{minCrop}, {minProduction}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CropData;
