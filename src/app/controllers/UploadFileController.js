const uploadFileController = {
    storeFile: (request, response) => {
        console.log(request.file)

        response.json({ mensagem: "legal"});
    } 
}

module.exports = uploadFileController;