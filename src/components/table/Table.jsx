import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Iconify from '../iconify/Iconify';

const Table = ({ columns, rows, rowsPerPage = 5, actions = [] }) => {
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentRows = rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div>
      <div className="table-wrapper" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered" style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index} style={{ wordWrap: 'break-word' }}>
                    {col}
                  </th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
          </table>

          <div
            className="table-body-wrapper"
            style={{
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            <table className="table table-bordered" style={{ tableLayout: 'fixed', width: '100%' }}>
              <tbody>
                {currentRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((col, colIndex) => (
                      <td key={colIndex} style={{ wordWrap: 'break-word' }}>
                        {row[col]}
                      </td>
                    ))}
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}
                      >
                        {actions.map((action, actionIndex) => (
                          <div
                            key={actionIndex}
                            style={{
                              width: '32px',
                              height: '32px',
                              cursor: 'pointer',
                              margin: '0 5px',
                            }}
                            onClick={() => action.onClick(row)}
                          >
                            <Iconify
                              icon={action.icon}
                              iconColor={action.label === 'Remove' ? 'danger' : 'primary'}
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {currentRows.length === 0 && (
            <div style={{ textAlign: 'center' }}>
              <h1>No Data</h1>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <Button
                variant={currentPage === index + 1 ? '' : 'secondary'}
                label={`${index + 1}`}
                onClick={() => handlePageChange(index + 1)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPage: PropTypes.number,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      className: PropTypes.string,
    })
  ),
};

export default Table;
