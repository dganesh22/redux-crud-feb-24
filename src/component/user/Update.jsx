import React from 'react'

function Update() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Update User</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" method='post'>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control" required/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Update User" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update