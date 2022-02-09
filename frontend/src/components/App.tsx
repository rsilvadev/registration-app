import React, { useState } from 'react';
import "../scss/App.scss";
import { months, Item } from '../utils/constants';
import Form from './Form';
import List from './List';

const App = () => {
  const [formData, setFormData] = useState<Item>({
		name: '',
		surname: '',
		country: '',
		birthday: ''
	});
	const [data, setData] = useState<Item[]>([]);
	const [message, setMessage] = useState<string>('');

	const calculateAge = (submittedDate: Date): number => {
		const currentDate= new Date();
		const currentYearDate = new Date(submittedDate.getTime());
		
		currentYearDate.setFullYear(currentDate.getFullYear());

		return currentDate.getFullYear() - submittedDate.getFullYear() + ((currentDate.valueOf() - currentYearDate.valueOf()) >= 0 ? 1 : 0);
	};

	const showMessage = (item: Item | null = null) => {
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
