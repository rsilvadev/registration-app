import { useEffect, useState } from 'react';
import Loading from './Loading';
import '../scss/Form.scss';

const Form = ({ formData, setFormData, data, setData, showMessage, message }) => {
  const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
        setLoading(false);
      });
	}, []);
  
  const submitForm = (e) => {
		e.preventDefault();

		setData([...data, formData]);

		showMessage();
		
		setFormData({
			name: '',
			surname: '',
			country: '',
			birthday: ''
		});
	};

	const updateFormData = (field, e) => {
		setFormData({...formData, [field]: e.target.value});
	};
  
  return(
    <div className="form-container">
      {loading ? 
        <Loading />
        :
        <>
          <form onSubmit={e => submitForm(e)}>
            <div className="input-container">
              <label>Name:</label>
              <input type="text" placeholder="name here" value={formData.name} onChange={e => updateFormData('name', e)} required />
            </div>
            <div className="input-container">
              <label>Surname:</label>
              <input type="text" placeholder="name here" value={formData.surname} onChange={e => updateFormData('surname', e)} required />
            </div>
            <div className="input-container">
              <label>Countries:</label>
              <select value={formData.country} onChange={e => updateFormData('country', e)} required>
                <option disabled={true} value=''>Countries</option>   
                { countries.map(country => <option key={country._id} value={country.name}>{country.name}</option>) }
              </select>
            </div>
            <div className="input-container">
              <label>Birthday:</label>
              <input type="date" value={formData.birthday} onChange={e => updateFormData('birthday', e)} required />
            </div>
            <div className="submit-button-container">
              <button type="submit">Save</button>
            </div>
          </form>
          {message && <div className="submit-message">{message}</div>}
        </>
      }
    </div>
  );
};

export default Form;