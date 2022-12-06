import React from 'react';
import "./Search.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SearchTable from './SearchTable';

export const Search = () => {
  return (
    <div className='Search'>
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-6">
            {/* <Popup contentStyle={{height:"90%",width: "90%"}} trigger={
                          <div class="form" id="searchBar"><input type="text" class="form-control form-input" placeholder="Search car wash providers in your locality..."/>
                          <span class="left-pan"><i class="bi bi-mic-fill"></i></span>
                          </div>} modal>
                          <SearchTable/>
                        </Popup> */}
            <div class="form" id="searchBar">
              <input type="text" class="form-control form-input" placeholder="Search car wash providers in your locality..." />
              <span class="left-pan"><i class="bi bi-mic-fill"></i></span>
            </div>
            <div className="modal fade" data-bs-backdrop="false" id="washerSearch" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Search Now</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Search your Washer
                    <SearchTable />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
