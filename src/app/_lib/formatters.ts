const currencyFormatters = {
  CZK: new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }),
};

const dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export const formatCurrency = (amount: number, currency: "CZK") =>
  currencyFormatters[currency].format(amount);

export const formatDate = (isoDate: string) => {
  const parts = dateFormatter.formatToParts(
    new Date(`${isoDate}T00:00:00.000Z`),
  );
  const datePart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value;

  return `${datePart("day")}.${datePart("month")}.${datePart("year")}`;
};
