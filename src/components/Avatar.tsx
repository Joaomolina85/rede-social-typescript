import style from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    // src: string;
    // alt?: string;
    // title?: string;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {

    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar}
        {...props}
            // src={src}
            // alt={alt}
            // title={title}
        />
    )
}