class UpdateFileController {
  constructor() {}

  static storeFile(request, response) {
    const { filename } = request.file;

    response.json({ arquivo: filename });
  }
}

export default UpdateFileController;
