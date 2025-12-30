export const phoneMask = (value) => {
  if (!value) return "";

  value = value.replace(/\D/g, "");

  value = value.slice(0, 11);

  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");

  return value;
};
