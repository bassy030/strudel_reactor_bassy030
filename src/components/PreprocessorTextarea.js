function PreprocessorTextarea({ defaultValue, onChange }) {
    return (
        <div className="card">
            <div className="card-header">
                <h5>Preprocessing Editor</h5>
            </div>
            <div className="card-body">
                <textarea className="form-control" defaultValue={defaultValue} onChange={onChange} id="proc" rows="14"></textarea>
            </div>
        </div>
    )
}

export default PreprocessorTextarea