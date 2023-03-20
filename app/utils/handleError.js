const handleHttpError = (res, message = "Algo sucedio", code = 403) => {
  res.status(code);
  res.json({ error: message });
};

export { handleHttpError };
