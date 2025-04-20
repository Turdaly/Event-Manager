const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

export const rules = {
  required: (v: any) => !!v || "Заполните это поле",
  min: (v: string) => v.length > 3 || "Минимум 4 символа",
  email: (v: string) => regex.email.test(v) || "Неправильный формат",
  matchPassword: (password: string) => (v: string) => v === password || "Пароли не совпадают",
};