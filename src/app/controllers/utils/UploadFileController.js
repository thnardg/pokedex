const updateFileController = {
  storeFile: (request, response) => {
    const { filename } = request.file;

    response.json({ arquivo: filename });
  },
};

export default updateFileController;
