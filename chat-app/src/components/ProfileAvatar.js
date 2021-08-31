import React from 'react'
import { Avatar } from 'rsuite'
import {getNameInitials}  from '../misc/helpers'

const ProfileAvatar = ({name,...avatarProps}) => {
    return (
        // wrapper class
        <Avatar circle {...avatarProps}>
            {getNameInitials(name)}
        </Avatar>
    )
}

export default ProfileAvatar
