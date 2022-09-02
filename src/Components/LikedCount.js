import React, { useState } from "react";

const LikedCount = () => {

    // const [likeCountU1, setLikeCountU1] = useState(0)
    // const [likeCountU2, setLikeCountU2] = useState(0)
    // const [isLikedU1, setIsLikedU1] = useState(false)
    // const [isLikedU2, setIsLikedU2] = useState(false)
    const [likeCount, setLikeCount] = useState({
        User1: 0,
        User2: 0
    })
    const [isLiked, setIsLiked] = useState({
        User1: false,
        User2: false
    })

    return (

        <div className="container mt-5">
            <div className="card-body">
                <div className="row">
                    <div className="column">
                        <h1>User 1</h1><br />
                        <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="user1" height="150px" width="150px" />
                        <br />
                        <br />
                        <button style={{ backgroundColor: isLiked.User1 === true ? "blue" : "white" }}
                            onClick={() => {
                                likeCount.User1 === 0 ? setLikeCount.User1(likeCount.User1 + 1) : setLikeCount.User1(0)
                                isLiked.User1 === true ? setIsLiked.User1(false) : setIsLiked.User1(true)
                            }}>
                            {/* Like */}
                            <img src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png" alt="like" height="25px" width="25px" />
                        </button>
                        {likeCount.User1}
                    </div>
                    <div className="column">
                        <h1>User 2</h1><br />
                        <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="user1" height="150px" width="150px" />
                        <br />
                        <br />
                        <button style={{ backgroundColor: isLiked.User2 === true ? "blue" : "white" }}
                            onClick={() => {
                                likeCount.User2 === 0 ? setLikeCount.User2(likeCount.User2 + 1) : setLikeCount.User2(0)
                                isLiked.User2 === true ? setIsLiked.User2(false) : setIsLiked.User2(true)
                            }}>
                            {/* Like */}
                            <img src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png" alt="like" height="25px" width="25px" />
                        </button>
                        {likeCount.User2}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LikedCount;