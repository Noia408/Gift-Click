export function ft(texto: string) {
  const cvertido = texto
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase();
  return cvertido;
}
