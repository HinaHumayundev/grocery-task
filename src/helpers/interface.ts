import { SortOrder } from "./utils";

export interface GroceryItem {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number;
}

export interface GroceryTableProps {
  rowsPerPageOptions: number[];
  sortedAndFilteredItems: GroceryItem[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sortOrder: SortOrder;
  sortBy: "weight" | null;
  handleSortBy: (field: keyof Pick<GroceryItem, "weight"> | null) => void;
}
