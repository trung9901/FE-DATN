import useSWR, { useSWRConfig } from "swr";
import instance from "../api/instance";
import { getEmployeeByBookingDay } from "../api/client/booking";
const useEmployees = () => {
  const { data, error, mutate } = useSWR(`/employees`);

  return {
    data,
    error,
  };
};
export default useEmployees;
