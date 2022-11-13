import React from 'react';

function SearchBar() {
    return (



        <form className="container-fluid">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <div className="row">
                        <div className=" align-items-center border input-group-addon row shadow-sm rounded">
                            <div className="col-9 input-group-addon" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                <input className="form-control border-0"
                                    type="text"
                                    placeholder="Search for courses..."
                                    id="search"
                                    name="search">
                                </input>
                            </div>
                            <button
                                className="col-3 input-group-addon border-start btn btn-outline-secondary bg-white border-0"
                            >
                                <i className="bi bi-search text-dark"></i>
                            </button>

                        </div>

                    </div>
                </div>
                <div className="col-3">

                </div>
            </div>



        </form>




    );
}

export default SearchBar;