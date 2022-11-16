export const getUsername = (value) => {
    return {
        type: 'USER_NAME',
        value
    };
}

export const userexits = (value) => {
    return {
        type: 'USER_EXITS',
        value
    }
}

export const messages = (value) => {
    return{
        type: 'MESSAGE',
        value
    }
}