
import useSWR, { useSWRConfig } from 'swr';
import instance from '../api/instance';
import { getEmployeeByBookingDay } from '../api/client/booking';
const useBooking = () => {

    const { data, error, mutate } = useSWR(`/booking`);
    const getEmployeeByBookingDays = async (query) => {
        const get = await getEmployeeByBookingDay(query)
        mutate(get)
    }
    return {
        data, error, getEmployeeByBookingDays
    }
}
export default useBooking