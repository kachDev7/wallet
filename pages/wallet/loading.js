const loading = () => {
    return(
        <div className="d-flex jac coll container err-holder my-3">
            <div className="text-danger fw-bold"><i class="bi-x-octagon-fill h1 err"></i></div>
            <div className="lead text-center"><p>Sorry, Something went wrong. Temporary error!</p></div>
            <div className="text-center"><button className="btn btn-primary">Go Back</button></div>
        </div>
    )
}

export default loading;