import React, { useState } from "react";

const LikedCount = () => {

    const [likeCountU1, setLikeCountU1] = useState(0)
    const [likeCountU2, setLikeCountU2] = useState(0)
    const [isLikedU1, setIsLikedU1] = useState(false)
    const [isLikedU2, setIsLikedU2] = useState(false)

    return (

        <div className="container mt-5">
            <div className="card-body">
                <div className="row">
                    <div className="column">
                        <h1>User 1</h1><br />
                        <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="user1" height="150px" width="150px" />
                        <br />
                        <br />
                        <button style={{ backgroundColor: isLikedU1 === true ? "blue" : "white" }}
                            onClick={() => {
                                likeCountU1 === 0 ? setLikeCountU1(likeCountU1 + 1) : setLikeCountU1(0)
                                isLikedU1 === true ? setIsLikedU1(false) : setIsLikedU1(true)
                            }}>
                            {/* Like */}
                            <img src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png" alt="like" height="25px" width="25px" />
                        </button>
                        {likeCountU1}
                    </div>
                    <div className="column">
                        <h1>User 2</h1><br />
                        <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="user1" height="150px" width="150px" />
                        <br />
                        <br />
                        <button style={{ backgroundColor: isLikedU2 === true ? "blue" : "white" }}
                            onClick={() => {
                                likeCountU2 === 0 ? setLikeCountU2(likeCountU2 + 1) : setLikeCountU2(0)
                                isLikedU2 === true ? setIsLikedU2(false) : setIsLikedU2(true)
                            }}>
                            {/* Like */}
                            <img src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png" alt="like" height="25px" width="25px" />
                        </button>
                        {likeCountU2}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LikedCount;