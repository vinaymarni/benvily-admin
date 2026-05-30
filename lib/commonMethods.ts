export function formattedDate(date: Date | null | undefined): string {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getDateObject(
  date: string | Date | null | undefined
): Date | null {
  if (!date) return null;

  if (date instanceof Date) {
    return date;
  }

  const [day, month, year] = date.split("/").map(Number);

  if (!day || !month || !year) {
    return null;
  }

  const parsedDate = new Date(year, month - 1, day);

  // Validate date
  if (
    parsedDate.getDate() !== day ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getFullYear() !== year
  ) {
    return null;
  }

  return parsedDate;
}