const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

export const rules = {
  required: (v: any) => !!v || "Fill in the field",
  min: (v: string) => v.length > 3 || "Min 4 characters",
  email: (v: string) => regex.email.test(v) || "Incorrect format",
  matchPassword: (password: string) => (v: string) => v === password || "Пароли не совпадают",
};