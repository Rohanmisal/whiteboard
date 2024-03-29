
const CreateRoomForm = () => {
    return (
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input type="text" className="form-control my-2" placeholder="Enter Your Name" />
            </div>
            <div className="from-group border">
                <div className="input-group d-flex align-items-center justify-content-center">
                    <input
                        type="text"
                        className="form-control my-2 border-0"
                        disabled
                        placeholder="Generate Room code"
                    />
                    <div className="input-group-append ">
                        <button className="btn btn-primary btn-sm me-1" type="button">
                            Generate
                        </button>
                        <button className="btn btn-outline-danger btn-sm me-1" type="button">Copy</button>
                    </div>
                </div>
            </div>

            <button type="submit" className="mt-4 btn btn-primary btn-block form-control">Generate Room</button>
        </form>
    )
}

export default CreateRoomForm
