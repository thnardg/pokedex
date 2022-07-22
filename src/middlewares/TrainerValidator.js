const yup = require("yup");

async function trainerValidator(request, response, next) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .strict()
      .required("Name é obrigatório")
      .min(10)
      .typeError("O campo nome deve ser uma string"),
    age: yup
      .number()
      .positive()
      .integer()
      .typeError("O campo idade deve ser um tipo inteiro"),
    city: yup
      .string()
      .strict()
      .required("City é obrigatório")
      .min(10)
      .typeError("O campo city deve ser uma string"),
  });

  await schema.validate(request.body).catch((err) => {
    return response.status(400).json({
      error: err.errors,
    });
  });

  next();
}

module.exports = trainerValidator;
