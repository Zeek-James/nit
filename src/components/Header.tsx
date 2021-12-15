import React, {FC} from 'react'

interface iH{
    title: string
}
export const Header:FC<iH> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
}
