// This componnent reders the textarea for the preprocessor code editor. It is used in App.js.
// The component takes in 2 props, defaultValue and onChange.
// defaultValue is used to set the initial value of the textarea and onChange is a callback function used whenever the content of the textarea changes.
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