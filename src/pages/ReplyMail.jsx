const Reply = () => {
    return (
        <div className="container p-sm-5">
            <div className="d-flex justify-content-center align-items-center ">
                <form className="p-sm-4 p-lg-5 p-3 border rounded-3  bg-white">
                    <h2 className="font-color">Leave a Reply</h2>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <input type="text" placeholder="Name"
                                name="name"
                                className=" reply-input mb-2" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input type="text" placeholder="Email"
                                name="email"
                                className=" reply-input mb-2" />
                        </div>
                        <div>
                            <textarea name="comment" id="comment"
                                rows="5"
                                className="reply-input my-4"
                                placeholder="Message">

                            </textarea>
                        </div>
                    </div>
                    <button className="reply-button">Post Comment</button>
                </form>
            </div>
        </div>
    );
}

export default Reply;