export interface CreateMenuPayload {
  name: string;
  price: number;
  assetUrl?: string;
}

export interface UpdateMenuPayload {
  id: number;
  name: string;
}

export interface Menu extends CreateMenuPayload {
  id: number;
  isArchived: boolean;
}

export interface MenuState {
  items: Menu[];
  isLoading: boolean;
  error: Error | null; // error could happen when network request - 404, 500
}
