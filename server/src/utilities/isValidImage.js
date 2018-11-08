const fs = require('fs');

const fileIsAnImage = file => {
    const validImageExtensions = ['.jpg', '.jpeg', '.png', '.bmp'];
    const fileParts = file.split('.');
    const extension = fileParts[fileParts.length - 1];

    return validImageExtensions.includes(`.${extension}`);
};

const fileExists = async file => {
    let isValid = true;

    return new Promise((resolve) => {
        fs.access(file, fs.constants.F_OK, (err) => {
            if (err) {
                isValid = false;
            }

            resolve(isValid);
        });
    })
};

const validate = async (file) => {
    if (!await fileExists(file)) {
        return false;
    }

    return fileIsAnImage(file);
};

module.exports = validate;
