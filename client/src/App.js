import logo from './logo.svg';
import './App.css';
import { Table } from './components/table';
import { fetchData } from './utils/data-management';
import { useEffect, useState } from 'react';
import './styles/general.css'
function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fData();
  }, []);

  const fData = async () => {
    try {
      const rawData = await fetchData('get-issues');
      const transformedData = rawData.map(data => ({
        p_id: data['p_id'],
        pk: data['m_id'],
        title: data['title'],
        description: data['description']
      }));
      setTableData(transformedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className='m-5'>
      <Table data={tableData} />
    </div>
  );
}

export default App;
