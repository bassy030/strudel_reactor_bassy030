function PreprocessorTextarea() {
    return (
        <div className="card">
            <div className="card-header">
                <h5>Preprocessing Editor</h5>
            </div>
            <div className="card-body">
                <textarea className="form-control" id="proc" rows="14"></textarea>
            </div>
        </div>
    )
}

export default PreprocessorTextarea