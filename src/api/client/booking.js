import instance from "../instance";

export const getEmployeeByBookingDay = (id, query) => {
  return instance.get(`/booking/get-employee-by-date?date=${id}&&${query}`);
};
