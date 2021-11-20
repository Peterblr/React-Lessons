import React from "react";
import s from "./Post.module.css";

function Post(props) {
    return (
        <div className={s.item}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1GxBgXGsMmeEqRJfxG2z0n3vc_OFa-lxXw&usqp=CAU"
                    alt="img"
                />
                <div className={s.like}>
                    <span>Like</span>
                    {props.likesCount}
                </div>
            </div>
            <div>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Post;
