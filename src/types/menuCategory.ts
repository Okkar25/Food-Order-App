// backend data
export interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
  isArchived: boolean;
}

// frontend sent data
export interface CreateMenuCategoryPayload {
  name: string;
  isAvailable: boolean;
}

export interface UpdateMenuCategoryPayload {
  id: number;
  name: string;
}

// slice initial state data
export interface MenuCategoryState {
  items: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}
