import React, { useEffect, useState } from 'react';
import getAllCustomer from "../services/auth.service";
import removeCustomer from "../services/auth.service";
import { DataGrid } from '@mui/x-data-grid';

export default function SearchTable() {
    const [customer, setCustomer] = useState([]);
    const [emailId, setEmailId] = useState("");

    const handleDelete = (emailId) => {
        console.log("Printing emailId", emailId);
        removeCustomer
          .removeCustomer(emailId)
          .then((response) => {
            console.log("course deleted successfully", response.data);
            init();
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };

    const btndelete = () =>{
        return (<button className="btn btn-danger ml-2" data-bs-toggle="modal" data-bs-target="#customerDelete">
        Delete
        </button>)
    };

    const columns = [
        { field: 'emailId', headerName: 'EmailId', width: 200 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'car', headerName: 'Car', width: 130 },
        {field: 'delete', headerName: 'Delete', width: 150, renderCell: btndelete,}
      ];

    const init = () => {
        getAllCustomer
          .getAllCustomer()
          .then((response) => {
            console.log("Printing customer data", response.data);
            setCustomer(response.data);
            console.log(customer);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };
    
      useEffect(() => {
        init();
      }, []);
    

  return (
    <div style={{ height: "400px", width: '90%',textColor:"white", marginTop:"10px" }}>
      <DataGrid
        rows={customer}
        columns={columns}
        pageSize={5}
        getRowId ={(row) => row.emailId}
        rowsPerPageOptions={[1]}
        onSelectionModelChange={(ids) => {
            const selectedIDs = ids;
            setEmailId(selectedIDs)}}
        // disableMultipleSelection={true}
        // checkboxSelection
        style={{background:"white"}}
      />
       <div className="modal fade" data-bs-backdrop="false" id="customerDelete"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Are you sure want to delete ?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={() => { handleDelete(emailId);}}
                  >Confirm</button>
                </div>
              </div>
            </div>
          </div>
      {console.log(emailId)}
    </div>
  );
}