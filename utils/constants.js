const STATUS_CODES = {
  CONFLICT: 409,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  USER_CONFLICT: 'Пользователь с таким email уже существует',
  MOVIE_CONFLICT: 'Фильм с таким id уже существует',
  FORBIDDEN: 'Нет прав для выполнения действия',
  USER_NOT_FOUND: 'Пользователь не найден',
  MOVIE_NOT_FOUND: 'Фильм не найден',
  PAGE_NOT_FOUND: 'Неверный адрес запроса',
  WRONG_CREDENTIALS: 'Неверные данные для входа',
  UNAUTHORIZED: 'Для обработки запроса необходима авторизация',
  WRONG_DATA_AT_FIELD: 'Неверные данные в поле',
  UNKNOWN_ERROR: 'Что-то пошло не так',
};

module.exports = {
  STATUS_CODES,
  ERROR_MESSAGES,
};
