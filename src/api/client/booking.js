import instance from "../instance";

export const getEmployeeByBookingDay = (query) => {
  return instance.get(`/booking/get-employee-by-date?date=${query}`);
};
