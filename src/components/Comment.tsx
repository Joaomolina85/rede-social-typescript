import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

       function handleLikeComment() {
            setLikeCount((state) => {
                return state + 1
            });
       }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} 
            src="https://avatars.githubusercontent.com/u/107960091?v=4" 
            alt=''
            />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>João Molina</strong>
                            <time title='17 de maio as 21:12' dateTime='2023-05-17'>Cerca de 1h atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}