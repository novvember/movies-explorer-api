const conflictError = {
  STATUS_CODE: 409,
  MESSAGE_USER: 'Пользователь с таким email уже существует',
  MESSAGE_MOVIE: 'Фильм с таким id уже существует',
};

const forbiddenError = {
  STATUS_CODE: 403,
  MESSAGE: 'Нет прав для выполнения действия',
};

const notFoundError = {
  STATUS_CODE: 404,
  MESSAGE_USER: 'Пользователь не найден',
  MESSAGE_MOVIE: 'Фильм не найден',
  MESSAGE_PAGE: 'Неверный адрес запроса',
};

const unauthorizedError = {
  STATUS_CODE: 401,
  MESSAGE_LOGIN: 'Неверные данные для входа',
  MESSAGE_PROTECTED: 'Для обработки запроса необходима авторизация',
};

const validationError = {
  STATUS_CODE: 400,
  MESSAGE_DETAILED: 'Неверные данные в поле',
};

const unknownError = {
  STATUS_CODE: 500,
  MESSAGE: 'Что-то пошло не так',
};

module.exports = {
  conflictError,
  forbiddenError,
  notFoundError,
  unauthorizedError,
  validationError,
  unknownError,
};
