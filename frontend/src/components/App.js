import { useState } from 'react';
import "../scss/App.scss";
import { months } from '../utils/constants';
import Form from './Form';
import List from './List';

const App = () => {
  const [formData, setFormData] = useState({
		name: '',
		surname: '',
		country: '',
		birthday: ''
	});
	const [data, setData] = useState([]);
	const [message, setMessage] = useState('');

	const calculateAge = (submittedDate) => {
		const currentDate = new Date();
		const currentYearDate = submittedDate;
		
		currentDate.setFullYear(currentDate.getFullYear());

		return Math.floor((currentDate - submittedDate) / (1000 * 3600 * 24 * 365)) + ((currentDate - currentYearDate) >= 0 ? 1 : 0);
	};

	const showMessage = (item = null) => {
		const info = item ? item : formData;
    const submittedDate = new Date(item ? item.birthday : formData.birthday);
		
		setMessage(`Hello ${info.name} ${info.surname} from ${info.country}, on ${submittedDate.getDate()} of ${months[submittedDate.getMonth()]} you will be ${calculateAge(submittedDate)} old!`);
	};

  return (
    <div className="app-container">
      <Form 
        formData={formData} 
        setFormData={setFormData} 
        data={data} 
        setData={setData} 
        message={message} 
        showMessage={showMessage} 
      />
      <List 
        data={data} 
        showMessage={showMessage} 
      />
    </div>
  );
};

export default App;
