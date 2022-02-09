import React from 'react';
import '../scss/List.scss';
import { Item } from '../utils/constants';

type ListProps = {
  data: Item[];
  showMessage: Function;
}

const List: React.FC<ListProps> = ({ data, showMessage }) => {
  return(
    <div className="table-container">
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Country</th>
              <th>birthday</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item: Item, idx: number) => (
              <tr key={idx} onClick={() => showMessage(item)}>
                <td>{`${item.name} ${item.surname}`}</td>
                <td>{ item.country }</td>
                <td>{ item.birthday }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
      <div className="footer">
        <label>Ricardo Silva</label>
      </div>
    </div>
  );
};

export default List;