import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store/configureStore";


export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectSearchQuery = (state: RootState) => state.contacts.searchQuery;
export const selectRoleFilter = (state: RootState) => state.contacts.roleFilter;
export const selectCurrentPage = (state: RootState) => state.contacts.currentPage;
export const selectPageSize = (state: RootState) => state.contacts.pageSize;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchQuery, selectRoleFilter],
  (contacts, searchQuery, roleFilter) => {
    return contacts.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.phoneNumber.includes(searchQuery);
      const matchesRole = roleFilter ? c.role === roleFilter : true;
      return matchesSearch && matchesRole;
    });
  }
);

export const selectPaginatedContacts = createSelector(
  [selectFilteredContacts, selectCurrentPage, selectPageSize],
  (filtered, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }
);
