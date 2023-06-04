import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar.js';
import { Comment } from './Comment.js';
import style from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent} from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface  Content { 
    type: 'paragraph' | 'link';
    content: string;
}

 export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
   post: PostType
}


export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post Muito Bacana, hein!'
    ]);

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    });

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        alert(`Voce deseja deletar esse comentário ${commentToDelete}?`);
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne);
        alert('Deletado com sucesso');
    }

    const isNewCommentInputEmpty = newCommentText.length === 0;
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={post.author.avatarUrl}  />
                    <div className={style.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}> {publishedDateRelativeToNow} </time>
            </header>

            <div className={style.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixei Seu Feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário!'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentInputEmpty} >Publicar
                    </button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}