const uploadFileController = {
    storeFile: (request, response) => {
        const { filename } = req.file

        response.json({ arquivo: filename });
    } 
}

module.exports = uploadFileController;