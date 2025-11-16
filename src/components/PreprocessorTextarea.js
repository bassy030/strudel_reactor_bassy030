function PreprocessorTextarea({ defaultValue, onChange }) {
    return (
        <div className="card shadow">
            <div className="card-header text-white" style={{ backgroundColor: '#74B9FF' }}>
                <h3><i class="bi bi-pen"></i> Preprocessing Editor</h3>
            </div>
            <div className="card-body">
                <textarea className="form-control" defaultValue={defaultValue} onChange={onChange} id="proc" rows="14"></textarea>
            </div>
        </div>
    )
}

export default PreprocessorTextarea