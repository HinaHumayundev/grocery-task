export const rowsPerPageOptions = [10, 25, 50, 100];

export type SortOrder = "asc" | "desc";

export const compareFields =
  <T,>(field: keyof T, sortOrder: SortOrder = "asc") =>
  (a: T, b: T) => {
    const valueA = a[field];
    const valueB = b[field];

    if (valueA === valueB) {
      return 0;
    } else if (sortOrder === "asc") {
      return valueA < valueB ? -1 : 1;
    } else {
      return valueA > valueB ? -1 : 1;
    }
  };
