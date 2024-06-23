<<<<<<< HEAD
This project is a React-based application that displays agricultural data, specifically crop yields and cultivation areas in India between 1950 and 2020. The application provides two main views: average crop data and maximum/minimum crop production data.

## Features

1. **Average Crop Data**: Displays the average yield and cultivation area for various crops over the years.
2. **Crop Production Data**: Shows the crop with the maximum and minimum production for each year.

## Technologies Used

- React
- Mantine UI
- React Router
- Fetch API
- CSV dataset of Indian Agriculture Analytics from National Data and Analytics Platform, NITI Aayog
(https://drive.google.com/file/d/1p1UW__9DvRuscA01kUFTMz_CUMKvTbyM/view)

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- yarn 

### Setup

### Installation

1. Clone the repository:


git clone https://github.com/your-username/crop-data-analysis.git
cd crop-data-analysis
yarn add @mantine/core react-router-dom
yarn install
yarn start


## Project Structure


crop-data-analysis/
├── public/
│   ├── IndianA.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AverageData.js
│   │   ├── CropData.js
│   │   └── CropData.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...


## Usage

Navigate to /average to view the average crop data.
Navigate to /crop to view the crop production data.

## Components

### AverageData Component
- Fetches crop data from IndianA.json.
- Processes the data to calculate average yield and cultivation area for each crop.
- Displays the processed data in a table.

### CropData Component
- Fetches crop data from IndianA.json.
- Processes the data to find the crop with the maximum and minimum production for each year.
- Displays the processed data in a table.

## CSS

The CropData.css file contains styling for the table and container to enhance the UI.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


## Contact
Author: Sohan Singh Thakur
Email: thsonu350@gmail.com
GitHub: Thsonu35
=======
# crop-data-analysis
This project is a React-based application that displays agricultural data, specifically crop yields and cultivation areas in India between 1950 and 2020. The application provides two main views: average crop data and maximum/minimum crop production data.
>>>>>>> debb0e2998a3c521b0a4b2afc52ab55e93eb7e2d
