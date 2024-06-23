import React, { useEffect, useState } from 'react';
import { Table, Container, Title } from '@mantine/core';
import '../CropData/CropData'; // Ensure the path to your CSS file is correct

const AverageData = () => {
  const [averageData, setAverageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./IndianA.json');
        const data = await response.json();
        const processed = processAverageData(data);
        setAverageData(processed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const processAverageData = (data) => {
    const cropMap = {};

    data.forEach(({ "Crop Name": crop, "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": cropYield, "Area Under Cultivation (UOM:Ha(Hectares))": area }) => {
      cropYield = parseFloat(cropYield) || 0; // Set to 0 if undefined or NaN
      area = parseFloat(area) || 0; // Set to 0 if undefined or NaN

      if (!cropMap[crop]) {
        cropMap[crop] = { totalYield: 0, totalArea: 0, count: 0 };
      }
      cropMap[crop].totalYield += cropYield;
      cropMap[crop].totalArea += area;
      cropMap[crop].count += 1;
    });

    return Object.entries(cropMap).map(([crop, { totalYield, totalArea, count }]) => ({
      crop,
      avgYield: (totalYield / count).toFixed(3),
      avgArea: (totalArea / count).toFixed(3),
    }));
  };

  return (
    <Container className="table-container">
      <Title order={2}>Average Crop Data</Title>
      <Table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield of the Crop between 1950-2020</th>
            <th>Average Cultivation Area of the Crop between 1950-2020</th>
          </tr>
        </thead>
        <tbody>
          {averageData.map(({ crop, avgYield, avgArea }) => (
            <tr key={crop}>
              <td>{crop}</td>
              <td>{avgYield}</td>
              <td>{avgArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AverageData;
