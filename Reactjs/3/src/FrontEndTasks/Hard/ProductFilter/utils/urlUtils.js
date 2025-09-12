// utils/urlOperations.js
import { MIN_PRICE, MAX_PRICE } from "../constants/filtersConstant";

const handlers = {
  priceRange: (params, value) => {
    if (value[0] > MIN_PRICE || value[1] < MAX_PRICE) {
      params.set("priceRange", `${value[0]}-${value[1]}`);
    }
  },
  brands: (params, value) => {
    value.forEach((item) => params.append("brands", item));
  },
  categories: (params, value) => {
    value.forEach((item) => params.append("categories", item));
  },
  minRating: (params, value) => {
    if (value > 0) params.set("minRating", value);
  },
  hasDiscount: (params, value) => {
    if (value) params.set("hasDiscount", value);
  },
  sortBy: (params, value) => {
    if (value !== "none") params.set("sortBy", value);
  },
};

const reverseHandlers = {
  priceRange: (filters, value) => ({
    ...filters,
    priceRange: value.split("-").map(Number),
  }),
  brands: (filters, _, params) => ({
    ...filters,
    brands: params.getAll("brands"),
  }),
  categories: (filters, _, params) => ({
    ...filters,
    categories: params.getAll("categories"),
  }),
  minRating: (filters, value) => ({
    ...filters,
    minRating: Number(value),
  }),
  hasDiscount: (filters) => ({
    ...filters,
    hasDiscount: true,
  }),
  sortBy: (filters, value) => ({
    ...filters,
    sortBy: value,
  }),
};

export function convertFiltertoParams(filters) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    handlers[key]?.(params, value);
  }
  const query = params.toString();
  window.history.replaceState(
    {},
    "",
    query ? `${window.location.pathname}?${query}` : window.location.pathname
  );
}

export function convertParamstoFilter(filters) {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of params.entries()) {
    filters = reverseHandlers[key]?.(filters, value, params) || filters;
  }
  return filters;
}
